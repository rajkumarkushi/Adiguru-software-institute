import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle, FaExclamationCircle, FaPaperPlane } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

// ── Inline Toast Component ─────────────────────────────────────────────────
function Toast({ type, message }) {
  if (!message) return null;
  const isSuccess = type === "success";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "16px 20px",
        borderRadius: "12px",
        marginBottom: "20px",
        background: isSuccess
          ? "rgba(218, 165, 32, 0.1)"
          : "rgba(220, 60, 60, 0.08)",
        border: `1px solid ${isSuccess ? "rgba(218,165,32,0.4)" : "rgba(220,60,60,0.3)"}`,
        animation: "fadeInUp 0.3s ease",
      }}
    >
      <span style={{ fontSize: 18, color: isSuccess ? "#B8860B" : "#c0392b", flexShrink: 0, marginTop: 2 }}>
        {isSuccess ? <FaCheckCircle /> : <FaExclamationCircle />}
      </span>
      <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: isSuccess ? "#7A5800" : "#a93226", fontWeight: 500 }}>
        {message}
      </p>
    </div>
  );
}

// ── Validation ─────────────────────────────────────────────────────────────
function validate({ name, email, message }) {
  if (!name.trim())    return "Please enter your name.";
  if (!email.trim())   return "Please enter your email address.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
  if (!message.trim()) return "Please write a message before sending.";
  return null;
}

// ── Main Component ─────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    // Client-side validation
    const error = validate(form);
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setStatus({ type: "success", message: "Thank you! We've received your message and will get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Failed to send your message. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* PAGE HERO */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero text-center">
            <span className="page-badge">Get In Touch</span>
            <h1>Contact Us</h1>
            <p className="page-hero-description mx-auto">
              Have questions about a course or career path? Our counselors are ready to
              guide you toward the right program.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT BODY */}
      <section className="py-section">
        <div className="container">
          <div className="row g-4">

            {/* FORM */}
            <ScrollReveal className="col-lg-7" direction="left">
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <p style={{ color: "var(--text-muted)", marginBottom: "24px", fontSize: "14px" }}>
                  Fill in the form and we'll get back to you within 24 hours.
                </p>

                {/* Toast notification */}
                <Toast type={status.type} message={status.message} />

                <form className="row g-3" id="contact-form" onSubmit={handleSubmit} noValidate>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="premium-input"
                      placeholder="Your Name *"
                      id="contact-name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="premium-input"
                      placeholder="Your Email *"
                      id="contact-email"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="premium-input"
                      placeholder="Phone Number"
                      id="contact-phone"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="premium-input"
                      placeholder="Course Interested In"
                      id="contact-course"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="premium-input premium-textarea"
                      rows="5"
                      placeholder="Your Message *"
                      id="contact-message"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="premium-submit-btn"
                      id="contact-submit-btn"
                      disabled={loading}
                      style={{ opacity: loading ? 0.75 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                    >
                      {loading ? (
                        <>
                          <span
                            style={{
                              display: "inline-block",
                              width: 16, height: 16,
                              border: "2px solid rgba(255,251,235,0.4)",
                              borderTopColor: "#FFFBEB",
                              borderRadius: "50%",
                              animation: "spinSlow 0.7s linear infinite",
                              verticalAlign: "middle",
                              marginRight: 8,
                            }}
                          />
                          Sending…
                        </>
                      ) : (
                        <><FaPaperPlane style={{ marginRight: 8 }} /> Send Message</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>

            {/* DETAILS */}
            <ScrollReveal className="col-lg-5" direction="right" delay={100}>
              <div className="contact-card h-100">
                <h5 className="mb-4">Institute Contact Details</h5>

                <div className="d-flex align-items-start gap-3 mb-3">
                  <span style={{ color: "var(--gold-mid)", fontSize: "18px", marginTop: "2px" }}><FaMapMarkerAlt /></span>
                  <p style={{ color: "var(--text-primary)" }}>
                    3rd Floor, Opposite LIC Office, Bypass Road,<br />Sangareddy, Telangana
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span style={{ color: "var(--gold-mid)", fontSize: "16px" }}><FaPhoneAlt /></span>
                  <p style={{ color: "var(--text-primary)" }}>+91 9394123452</p>
                </div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <span style={{ color: "var(--gold-mid)", fontSize: "16px" }}><FaEnvelope /></span>
                  <p style={{ color: "var(--text-primary)" }}>info@adiguru.in</p>
                </div>

                <div className="d-flex gap-3 mb-4">
                  <a href="https://wa.me/919394123452" target="_blank" rel="noreferrer"
                     className="contact-social-link" id="contact-whatsapp-link">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"
                     className="contact-social-link" id="contact-instagram-link">
                    <FaInstagram /> Instagram
                  </a>
                </div>

                <div className="modern-map-card small-map-card">
                  <iframe
                    title="Adi Guru Contact Location"
                    src="https://www.google.com/maps?q=Opposite+LIC+Office,+Bypass+Road,+Sangareddy,+Telangana&output=embed"
                    width="100%"
                    height="220"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;