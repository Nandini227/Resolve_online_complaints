import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css"; // Make sure this contains your footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Services Section */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/usighn">Complaints</Link>
            </li>
            <li>
              <Link to="/usighn">Resolution</Link>
            </li>
            <li>
              <Link to="/usighn">History</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usighn">User</Link>
            </li>
            <li>
              <Link to="/asighn">Admin</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter and Contact */}
        <div className="footer-col">
          <h3>Newsletter</h3>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Email Address" />
            <button type="submit">Subscribe</button>
          </form>
          <p>
            <FaPhone /> +91 9876543210
          </p>
          <p>
            <FaEnvelope /> resolvent321@gmail.com
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Resolvent. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
