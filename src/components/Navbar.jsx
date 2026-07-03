import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar main-navbar">
      <div className="container-fluid navbar-inner px-4">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <img src={logo} alt="Adi Guru Logo" className="logo-img" />
          <div className="ms-3">
            <h2 className="brand-title">Adi Guru</h2>
            <p className="brand-subtitle">Software Training Institute</p>
          </div>
        </Link>

        {/* RIGHT: theme toggle + hamburger */}
        <div className="d-flex align-items-center gap-2 ms-auto">

          {/* GOLD THEME TOGGLE */}
          <button
            className="theme-toggle-btn"
            id="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            className="menu-toggle-btn"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* NAV LINKS */}
        <div className={`navbar-menu ${menuOpen ? "is-open" : ""}`}>
          <ul className="navbar-nav align-items-center flex-row flex-wrap justify-content-end">
            <li className="nav-item">
              <Link className="nav-link nav-custom-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-custom-link" to="/courses" onClick={closeMenu}>Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-custom-link" to="/placements" onClick={closeMenu}>Placements</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-custom-link" to="/about" onClick={closeMenu}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-custom-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={closeMenu}>
                <button className="nav-enroll-btn" id="navbar-enroll-btn">
                  Enroll Now →
                </button>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;