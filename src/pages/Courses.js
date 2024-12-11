import React from 'react';
import { coursesData } from '../Data/CoursesData'; // Import course data
import '../styles/components/Courses.css'; // Optional: Add custom styles

const Courses = () => (
  <div className="courses">
    <h2>Available Courses</h2>
    <div className="courses-list">
      {coursesData.map((course, index) => (
        <div key={index} className="course-card">
          <img src={course.image} alt={course.name} className="course-image" />
          <h3>{course.name}</h3>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Fees:</strong> {course.fees}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Courses;
