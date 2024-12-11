import React from 'react';
import '../styles/components/Confirmation.css';


const Confirmation = ({ formData }) => (
  <div className="confirmation">
    <h2>Registration Successful!</h2>
    <p><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Phone:</strong> {formData.phone}</p>
    <p><strong>Course:</strong> {formData.course}</p>
    <p><strong>Payment Method:</strong> {formData.payment}</p>
  </div>
);

export default Confirmation;
