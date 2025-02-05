// Footer.js
import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>
            Tech <span>Mentor</span>{" "}
          </h2>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/certificate">Certificate</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* All Courses Section */}
        <div className="footer-section courses">
          <h4>All Courses</h4>
          <ul>
            <li>
              <a href="/courses/linux">Application Support</a>
            </li>
            <li>
              <a href="/courses/frontend">Frontend Developer</a>
            </li>
            <li>
              <a href="/courses/backend">Backend Developer</a>
            </li>
            <li>
              <a href="/courses/cloud">Cloud Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/qa">QA Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/mobile">Mobile App Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/devops">DevOps Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/site">Site Reliability Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/big">Big Data Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/cyber">Cyber Security Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/machine">Machine Learning Engineer</a>
            </li>
            <li>
              {" "}
              <a href="/courses/data">Data Architect</a>
            </li>
            <li>
              {" "}
              <a href="/courses/software">Software Architect</a>
            </li>
            <li>
              {" "}
              <a href="/courses/chief">Chief Technology Officer</a>
            </li>
            <li>
              <a href="/courses/tools">
                Introduction to Various Tools Used in IT Industry
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Address: Candor Tech Sector 135 Noida, India</p>
          <p>
            Mobile No: <a href="tel:+919565345676">+91 85273 45379</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:techjobmentor@gmail.com ">
              {" "}
              techjobmentor@gmail.com{" "}
            </a>
          </p>
          <div className="social-icons">
            <a
              href=" https://www.linkedin.com/in/tech-mentors?"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href=" https://www.instagram.com/techmentors_/profilecard/?igsh=YW9hNnlkcjlsaXU4 "
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>©2024. Tech Mentor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
