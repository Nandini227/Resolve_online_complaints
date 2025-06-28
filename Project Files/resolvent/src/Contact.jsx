import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>
         Whether you have a question about your complaint status, a suggestion for improvement, or need help using the platform — we're just a message away.

Or simply fill out the contact form below and we’ll get back to you as soon as possible.

Your feedback helps us improve and serve you better. Thank you for using Resolvent!
        </p>
        <div className="contact-info">
        
          <div className="info-box">
            <span className="icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 - 9876543210</p>
            </div>
          </div>
          <div className="info-box">
            <span className="icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p>resolvent321@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <h3>Send Message</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <textarea rows="5" placeholder="Type your Message..." required />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
