import React, { useState } from 'react';
import '../assets/css/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or similar)
    alert('Form Submitted');
  };

  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <section className="contact-form-container">
          <h2>Get in Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>

        <section className="contact-details">
          <h2>Contact Details</h2>
          <ul>
            <li><strong>Address:</strong> 123 Party HQ, Capital City, Country</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Email:</strong> contact@party.com</li>
            <li><strong>Follow us:</strong>
              <a href="https://twitter.com/party" target="_blank" rel="noopener noreferrer">Twitter</a>,
              <a href="https://facebook.com/party" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
          </ul>
        </section>

        <section className="map-container">
          <h2>Find Us</h2>
          <iframe
            title="Party Headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.451903947319!2d144.9560543153174!3d-37.81627917975138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d432f17e0d5%3A0x5045675218ce5e0!2sFederation+Square!5e0!3m2!1sen!2sus!4v1647316852579!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
