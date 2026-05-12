import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <h1 className="fw-bold mb-4">Contact Us</h1>
        <div className="row g-4">
          <div className="col-lg-7">
            <form className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Interested In"
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-primary px-4">Send Message</button>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="contact-card h-100">
              <h5 className="fw-bold mb-3">Institute Contact Details</h5>
              <p className="d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>
                  3rd Floor, Opposite LIC Office, Bypass Road, Sangareddy, Telangana
                </span>
              </p>
              <p className="d-flex align-items-center gap-2 mb-3">
                <FaPhoneAlt />
                <span>+91 9394123452</span>
              </p>
              <div className="d-flex gap-3 mb-3">
                <a
                  href="https://wa.me/919394123452"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-link"
                >
                  <FaInstagram /> Instagram
                </a>
              </div>
              <div className="map-wrapper modern-map-card small-map-card mt-2">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;