import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* TOP BAR */}

      <div className="topbar">

        <div className="container topbar-inner d-flex justify-content-between align-items-center">

          <div className="topbar-left">
            <span>📞 +91 9394123452</span>
            <span className="ms-4">✉️ info@adiguru.in</span>
          </div>

          <div className="topbar-right">
            <span>Follow Us:</span>
          </div>

        </div>

      </div>

      {/* MAIN NAVBAR */}

      <nav className="navbar main-navbar">

        <div className="container navbar-inner">

          {/* LOGO */}

          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
          >

            <img
              src={logo}
              alt="logo"
              className="logo-img"
            />

            <div className="ms-3">

              <h2 className="brand-title">
                Adi Guru
              </h2>

              <p className="brand-subtitle">
                Software Training Institute
              </p>

            </div>

          </Link>

          {/* MENU */}
          <button
            className="menu-toggle-btn"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`navbar-menu ms-auto ${menuOpen ? "is-open" : ""}`}>
            <ul className="navbar-nav align-items-center flex-row flex-wrap justify-content-end">

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/courses" onClick={closeMenu}>
                  Courses
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/placements" onClick={closeMenu}>
                  Placements
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/about" onClick={closeMenu}>
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-custom-link" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>

            </ul>
          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;