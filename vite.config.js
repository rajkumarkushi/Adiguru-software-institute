import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { Resend } from 'resend'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => {
                body += chunk.toString();
              });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const { name, email, phone, course, message } = data;

                  // Server-side validation (matching our serverless endpoint)
                  if (!name || !email || !message) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: "Name, email, and message are required." }));
                    return;
                  }

                  const apiKey = env.RESEND_API_KEY;
                  const adminEmail = env.ADMIN_EMAIL || 'info@adiguru.in';
                  const fromEmail = env.FROM_EMAIL || 'Adi Guru Enquiry <onboarding@resend.dev>';

                  if (!apiKey) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: "Resend API key is not configured locally in your .env file." }));
                    return;
                  }

                  const resend = new Resend(apiKey);
                  await resend.emails.send({
                    from: fromEmail,
                    to: [adminEmail],
                    reply_to: email,
                    subject: `New Enquiry — ${name} | Adi Guru`,
                    html: `
                      <div style="font-family: Arial, sans-serif; background: #FFFBEB; padding: 30px;">
                        <h2 style="color: #7A5800;">New Enquiry Received (Local Dev)</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                        <p><strong>Course:</strong> ${course || 'Not specified'}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: #fff; padding: 15px; border-radius: 8px; border: 1px solid rgba(184,134,11,0.25);">
                          ${message.replace(/\n/g, '<br/>')}
                        </div>
                      </div>
                    `
                  });

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, message: "Message sent successfully!" }));
                } catch (err) {
                  console.error("Local API contact middleware error:", err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message || "Failed to send email locally." }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
  }
})
