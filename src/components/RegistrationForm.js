import React, { useState } from 'react';
import '../styles/components/RegistrationForm.css';

// Custom Modal Component
const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    agreeToTerms: false,
  });

  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate T&C checkbox
    if (!formData.agreeToTerms) {
      setError('You must accept the Terms and Conditions to register.');
      return;
    }

    // Clear the error if everything is valid
    setError('');

    // Proceed with form submission (e.g., send data to the server)
    console.log('Registration successful:', formData);

    // Open the custom modal with success message
    setModalMessage('You have successfully registered for the course!');
    setIsModalOpen(true);

    // Reset the form data after successful registration
    setFormData({
      name: '',
      email: '',
      course: '',
      agreeToTerms: false,
    });
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Course Registration</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="Java Full Stack Development">Java Full Stack Development</option>
            <option value="Python Full Stack Development">Python Full Stack Development</option>
            <option value="MERN Full Stack Development">MERN Full Stack Development</option>
          </select>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            I agree to the Terms and Conditions
          </label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>

      {/* Modal for success message */}
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default RegistrationForm;
