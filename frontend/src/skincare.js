// skincare.js
import React from 'react';
import './Skincare.css';
import newHome from './images/skincare/homepage.png'; 
import reviewdetail from './images/skincare/reviewdetail.png';
import reviewpage from './images/skincare/reviewpage.png';
import NavBar from './NavBar1';

const Skincare = () => {
  return (
    <>
      <NavBar showHomeButton={true} />
      <section className="skin-care">
        <section className="skin">
          <h3>Skincare Review</h3>
          <p> 
            Skincare Review is a web application designed for skincare enthusiasts to make informed decisions...
            <br /><br />
            <strong>Tech Stack:</strong> React, jQuery, JavaScript, CSS, AJAX, JSON, APIs, PostgreSQL
            <br /><br />
            <a href="https://github.com/Carlinha23/skin-care" target="_blank" rel="noopener noreferrer" >View Project</a>
          </p>
        </section>
        <section className="picture">
          <img src={newHome} alt="Carla" className="home-image" />
          <img src={reviewdetail} alt="Carla" className="review-image"/>
          <img src={reviewpage} alt="Carla" className="review-page"/>
        </section>
      </section>
    </>
  );
};

export default Skincare;

