import React from 'react';
import contactImage from '../images/contactus.jpg'; // Import the image
import '../styles/components/contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-content">
      <img src={contactImage} alt="Contact Us" className="contact-image" />
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <p>Email: support@courseregistration.com</p>
        <p>Phone: +91 9146****32</p>

       
      </div>
    </div>
  );
};

export default Contact;
