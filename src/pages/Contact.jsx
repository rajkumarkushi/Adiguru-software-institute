import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";

function Contact() {
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
                <p style={{ color: "var(--text-muted)", marginBottom: "28px", fontSize: "14px" }}>
                  Fill in the form and we'll get back to you within 24 hours.
                </p>
                <form className="row g-3" id="contact-form">
                  <div className="col-md-6">
                    <input type="text"  className="premium-input" placeholder="Your Name"           id="contact-name"    />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="premium-input" placeholder="Your Email"          id="contact-email"   />
                  </div>
                  <div className="col-md-6">
                    <input type="tel"   className="premium-input" placeholder="Phone Number"        id="contact-phone"   />
                  </div>
                  <div className="col-md-6">
                    <input type="text"  className="premium-input" placeholder="Course Interested In" id="contact-course"  />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="premium-input premium-textarea"
                      rows="5"
                      placeholder="Your Message"
                      id="contact-message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="premium-submit-btn" id="contact-submit-btn">
                      Send Message →
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
                  <span style={{ color: "#6c47ff", fontSize: "18px", marginTop: "2px" }}><FaMapMarkerAlt /></span>
                  <p style={{ color: "var(--text-primary)" }}>
                    3rd Floor, Opposite LIC Office, Bypass Road,<br />Sangareddy, Telangana
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span style={{ color: "#6c47ff", fontSize: "16px" }}><FaPhoneAlt /></span>
                  <p style={{ color: "var(--text-primary)" }}>+91 9394123452</p>
                </div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <span style={{ color: "#6c47ff", fontSize: "16px" }}><FaEnvelope /></span>
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
                  ></iframe>
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