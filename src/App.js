import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import Confirmation from './components/Confirmation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import TrainerInfo from './components/TrainerInfo';
import './styles/App.css';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Define routes for Home, Courses, Contact, and TrainerInfo */}
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/trainer-info" element={<TrainerInfo />} /> {/* Use 'element' instead of 'component' */}
          
          {/* Default route for the registration form workflow */}
          <Route
            path="/register"
            element={
              <>
                {formData ? (
                  <Confirmation formData={formData} />
                ) : (
                  <RegistrationForm onSubmit={handleFormSubmit} />
                )}
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
