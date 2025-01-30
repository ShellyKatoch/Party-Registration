// src/pages/AboutPage.jsx
import React from "react";
import '../assets/css/about.css'

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <header className="about-header">
        <h1>About Our Political Party</h1>
        <p>
          Our political party is dedicated to building a brighter future through 
          equality, justice, and progress. Learn more about who we are and what 
          we stand for.
        </p>
      </header>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Founded in [Year], our political party was established with the aim of 
          addressing the most pressing issues of our time. Over the years, we 
          have grown into a movement driven by passionate members committed to 
          making a difference.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To create a society where every individual has the opportunity to 
          thrive. We aim to achieve this by promoting policies that prioritize 
          education, healthcare, and sustainability.
        </p>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/path-to-image1.jpg" alt="Leader" className="team-photo" />
            <h3>Leader Name</h3>
            <p>Position/Role</p>
          </div>
          <div className="team-member">
            <img src="/path-to-image2.jpg" alt="Member" className="team-photo" />
            <h3>Member Name</h3>
            <p>Position/Role</p>
          </div>
          <div className="team-member">
            <img src="/path-to-image3.jpg" alt="Member" className="team-photo" />
            <h3>Member Name</h3>
            <p>Position/Role</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2025 Political Party. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;