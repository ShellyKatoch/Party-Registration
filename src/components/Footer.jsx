import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Quick Links Section */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; 2025 Party Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
