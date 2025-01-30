// src/pages/HomePage.jsx
import React from "react";
import '../assets/css/home.css'
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Welcome to Our Political Party</h1>
        <p>Join us in making a difference for a better future!</p>
        <button className="cta-button">Register Now</button>
      </header>

      <section className="highlights-section">
        <h2>Our Mission and Vision</h2>
        <p>
          We strive to create a society that values equality, justice, and 
          progress. Together, we can achieve more.
        </p>
      </section>

      <section className="values-section">
        <h2>Core Values</h2>
        <div className="values-list">
          <div className="value-item">
            <h3>Equality</h3>
            <p>Ensuring equal opportunities for everyone.</p>
          </div>
          <div className="value-item">
            <h3>Justice</h3>
            <p>Advocating for fairness and accountability.</p>
          </div>
          <div className="value-item">
            <h3>Progress</h3>
            <p>Driving innovation and sustainable growth.</p>
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        <p>&copy; 2025 Political Party. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
