import React from 'react';
import '../styles/components/TrainerInfo.css';
import profilePic from '../images/Trainer.jpg'; // Replace with your image path

const TrainerInfo = () => {
  return (
    <div className="trainer-info-container">
      <div className="trainer-info">
        <h2>Trainer Information</h2>
        <div className="trainer-details">
          <img 
            src={profilePic} 
            alt="Trainer" 
            className="trainer-image" 
          />
          <div className="trainer-text">
            <p>
              Welcome to the CourseMate platform! I am Chaithra M, the creator and
              trainer for the courses offered here. I specialize in Full Stack
              Development and am passionate about empowering students to build
              dynamic applications.
            </p>
            <p>
              I have extensive experience in MERN stack, Java, Python, and more,
              and I am here to help you succeed in your learning journey.
            </p>
            <p>Feel free to reach out with any questions!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerInfo;
