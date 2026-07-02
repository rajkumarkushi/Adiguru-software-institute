import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4 align-items-start">

          {/* BRAND */}
          <div className="col-md-5">
            <div className="footer-brand-title">Adi Guru Software Training Institute</div>
            <p className="footer-text mb-3">
              Professional IT training for students and professionals with
              hands-on projects, expert mentors, and dedicated placement support.
            </p>
            <p className="footer-text small">
              📍 3rd Floor, Opposite LIC Office, Bypass Road, Sangareddy, Telangana
            </p>
          </div>

          {/* CONTACT */}
          <div className="col-md-3">
            <div className="footer-heading">Contact</div>
            <p className="footer-text mb-2">📞 +91 9394123452</p>
            <p className="footer-text mb-0">✉️ info@adiguru.in</p>
          </div>

          {/* SOCIAL */}
          <div className="col-md-4">
            <div className="footer-heading">Connect With Us</div>
            <div className="social-icons d-flex gap-3 mb-3">
              <a
                href="https://wa.me/919394123452"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                id="footer-whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                id="footer-instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="footer-text small">
              Follow us for the latest course updates, career tips, and placement success stories.
            </p>
          </div>

        </div>

        <hr className="footer-divider my-4" />

        <p className="footer-bottom-text text-center mb-0">
          © 2026 Adi Guru Software Training Institute. All Rights Reserved. &nbsp;·&nbsp; Sangareddy, Telangana
        </p>
      </div>
    </footer>
  );
}

export default Footer;