import React from 'react';
import './Index.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src="/path-to-your-logo.png" alt="Kitabay Logo" className="footer-logo" />
          <p className="footer-description">
            Embark on a literary journey with Kitabay, the online book wonderland nestled in Jaipur since 2018. 
            We take pride in being sustainable and eco-friendly - from new releases to treasured pre-loved books. 
            And wait, there's more! Dive into the sea of bookish merchandise that'll make any bookworm's heart flutter. 
            Join Kitabay and let sustainable reading ignite your imagination!
          </p>
          <div className="footer-icons">
            <FaFacebook className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </div>
          <div className="footer-search">
            <input type="text" placeholder="Subscribe Me" className="footer-search-input" />
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h4 className="footer-heading">Brand Story</h4>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Shop Now</h4>
            <ul>
              <li>Books</li>
              <li>Mystery Box</li>
              <li>Merchandise</li>
              <li>Gifting</li>
              <li>Bulk</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Policies</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping & Returns</li>
              <li>Payments & Refunds</li>
              <li>T&C</li>
              <li>Track Your Order</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 | All Rights Reserved, Kitabay.com</p>
        <p>Vedas Corp</p>
      </div>
    </footer>
  );
};

export default Footer;
