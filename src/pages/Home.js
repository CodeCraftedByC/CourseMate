import React from 'react';
import welcomeImage from '../images/welcome.jpg';
import '../styles/components/Home.css'; // Ensure you have this CSS file

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        <h1>Welcome to the CourseMate</h1>
        <p>Your journey to learning starts here. Explore our available courses and register today!</p>
      </div>
    </div>
  );
};

export default Home;
