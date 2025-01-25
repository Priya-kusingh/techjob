import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="navbar-container">
      {/* Logo */}

      <div className="navbar">
        <h2 className="navbar-logo">
          Tech <span>Mentors</span>
        </h2>

        {/* Desktop Menu */}
        <nav className="navbar-links">
          <ul className="navbar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <Link to="/service">
                <span className="dropdown-toggle">Courses</span>{" "}
              </Link>
              <span className={`arrow ${dropdownOpen ? "open" : ""}`}>
                &#9662;
              </span>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link>Web Development</Link>
                  </li>
                  <li>
                    <Link>Python Developer</Link>
                  </li>
                  <li>
                    <Link>Testing Engineer</Link>
                  </li>
                  <li>
                    <Link>Application Support</Link>
                  </li>
                  <li>
                    <Link>Cloud Engineer</Link>
                  </li>
                  <li>
                    <Link>DBA</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/certificate">Certificate</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Link to="/book">
            <button className="btn-register">Register</button>
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="upper-row-1">
          <h1 className="moving-text-1">
            "Boost your career with expert job consulting. Achieve your goals,
            stand out to employers, and unlock new opportunities today!" and ✍
            Registration is going on hurry up +9185273 45379🚀🚀
          </h1>
        </div>
      </div>

      {/* Mobile Left Side Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <h2 className="navbar-logo">
            Tech <span>Mentors</span>
          </h2>
          <i className="fas fa-times close-icon" onClick={toggleMenu}></i>
        </div>
        <ul className="mobile-menu-list">
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <Link to="/service">
              <span>Courses</span>{" "}
            </Link>
            <span className={`arrow ${dropdownOpen ? "open" : ""}`}>
              &#9662;
            </span>
            {dropdownOpen && (
              <ul className="mobile-menu-list">
                <li>
                  <Link>Web Development</Link>
                </li>
                <li>
                  <Link>Python Developer</Link>
                </li>
                <li>
                  <Link>Testing Engineer</Link>
                </li>
                <li>
                  <Link>Application Support</Link>
                </li>
                <li>
                  <Link>Cloud Engineer</Link>
                </li>
                <li>
                  <Link>DBA</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/certificate" onClick={toggleMenu}>
              Certificate
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/book">
              <button className="btn-register">Register</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
