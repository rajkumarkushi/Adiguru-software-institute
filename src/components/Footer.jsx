import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer text-white py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-md-6">
            <h5 className="fw-bold">Adi Guru Software Training Institute</h5>
            <p className="mb-2">
              Professional IT training for students and professionals with practical projects and placement support.
            </p>
            <p className="mb-0 small">
              3rd Floor, Opposite LIC Office, Bypass Road, Sangareddy, Telangana
            </p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="mb-1">Phone/WhatsApp: +91 9394123452</p>
            <p className="mb-0">Email: info@adiguru.in</p>
          </div>
          <div className="col-md-3">
            <h6 className="fw-bold">Connect</h6>
            <div className="social-icons d-flex gap-3">
              <a
                href="https://wa.me/919394123452"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <p className="mb-0 text-center">© 2026 Adi Guru. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;