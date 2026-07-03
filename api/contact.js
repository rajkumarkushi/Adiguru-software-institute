// api/contact.js  — Vercel Serverless Function
// Triggered by POST /api/contact from the Contact form.
// Uses Resend to email form submissions to the admin.
//
// Required environment variables (set in Vercel dashboard):
//   RESEND_API_KEY   — from https://resend.com/api-keys
//   ADMIN_EMAIL      — email address to receive enquiries (e.g. info@adiguru.tech)
//   FROM_EMAIL       — verified sender address in Resend (e.g. noreply@adiguru.tech)

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple validation helpers
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const sanitize = (v) => String(v ?? "").trim().slice(0, 1000);

export default async function handler(req, res) {
  // ── Only allow POST ──────────────────────────────────────────────────────
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  // ── Parse & sanitize inputs ──────────────────────────────────────────────
  const name = sanitize(req.body?.name);
  const email = sanitize(req.body?.email);
  const phone = sanitize(req.body?.phone);
  const course = sanitize(req.body?.course);
  const message = sanitize(req.body?.message);

  // ── Server-side validation ────────────────────────────────────────────────
  const errors = [];
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  else if (!isValidEmail(email)) errors.push("Please enter a valid email address.");
  if (!message) errors.push("Message is required.");

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join(" ") });
  }

  // ── Send email via Resend ─────────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "Adi Guru Enquiry <onboarding@resend.dev>",
      to: [process.env.ADMIN_EMAIL || "adiguru08@gmail.com"],
      reply_to: email,
      subject: `New Enquiry — ${name} | Adi Guru`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
          <body style="font-family:Inter,Arial,sans-serif;background:#FFFBEB;margin:0;padding:0;">
            <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:16px;border:1px solid rgba(184,134,11,0.25);overflow:hidden;box-shadow:0 4px 24px rgba(184,134,11,0.1);">

              <!-- HEADER -->
              <div style="background:linear-gradient(135deg,#7A5800,#C9940A,#DAA520);padding:32px 36px;">
                <h1 style="margin:0;color:#FFFBEB;font-size:22px;font-weight:800;letter-spacing:-0.5px;">New Enquiry — Adi Guru</h1>
                <p style="margin:6px 0 0;color:rgba(255,251,235,0.8);font-size:14px;">Someone submitted the contact form on your website.</p>
              </div>

              <!-- BODY -->
              <div style="padding:32px 36px;">
                <table style="width:100%;border-collapse:collapse;">
                  ${[
          ["Full Name", name],
          ["Email Address", email],
          ["Phone Number", phone || "Not provided"],
          ["Course of Interest", course || "Not specified"],
        ].map(([label, value]) => `
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid rgba(184,134,11,0.1);width:38%;">
                        <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#7A5800;">${label}</span>
                      </td>
                      <td style="padding:12px 0;border-bottom:1px solid rgba(184,134,11,0.1);">
                        <span style="color:#1A0900;font-size:14px;">${value}</span>
                      </td>
                    </tr>
                  `).join("")}
                </table>

                <!-- MESSAGE -->
                <div style="margin-top:24px;">
                  <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#7A5800;margin-bottom:10px;">Message</p>
                  <div style="background:#FFFBEB;border:1px solid rgba(184,134,11,0.2);border-radius:10px;padding:18px;color:#1A0900;font-size:14px;line-height:1.8;">
                    ${message.replace(/\n/g, "<br/>")}
                  </div>
                </div>

                <!-- REPLY CTA -->
                <div style="margin-top:28px;text-align:center;">
                  <a href="mailto:${email}"
                     style="display:inline-block;background:linear-gradient(135deg,#7A5800,#C9940A,#DAA520);color:#FFFBEB;padding:14px 28px;border-radius:10px;font-weight:700;font-size:14px;text-decoration:none;">
                    Reply to ${name} →
                  </a>
                </div>
              </div>

              <!-- FOOTER -->
              <div style="padding:20px 36px;background:#f9f3e0;border-top:1px solid rgba(184,134,11,0.15);text-align:center;">
                <p style="margin:0;font-size:12px;color:#7A5800;">Agi Guru Learning and Skill Development Institute — Sangareddy, Telangana</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (err) {
    console.error("[/api/contact] Resend error:", err);
    return res.status(500).json({ error: "Failed to send your message. Please try again or call us directly." });
  }
}
