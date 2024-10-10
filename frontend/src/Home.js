import React from 'react';
import './Home.css';
import me from './images/me.jpg';


const Home = () => {
  return (
    <div className="Home">

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
        <img src={me} alt="Carla" className="about-image" />
          <div className="about-text">
            <p>
              Welcome! I'm Carla, a full-stack software engineer with a passion for coding and problem-solving. I enjoy creating streamlined, user-friendly solutions and thrive on learning new technologies and tackling challenges. With years of experience as a data analyst, I've worked in diverse lab environments including material analysis, biotech, and pharma.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-item">
            <h3>Skincare Review</h3>
            <p>A web app I built using React and Node.js.</p>
            <a href="https://github.com/Carlinha23/skin-care" target="_blank" rel="noopener noreferrer">View Project</a>
            <h3>Software news</h3>
            <p>A web app I built using React and Node.js.</p>
            <a href="https://github.com/Carlinha23/news" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
          <li>Python</li>
        </ul>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: moraescarla23@gmail.com</p>
      </section>
    </div>
  );
};

export default Home;
