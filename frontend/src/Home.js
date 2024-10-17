import React, {useState} from 'react';
import './Home.css';
import me from './images/me.jpg';
import htmlLogo from './images/logo/html5-color.svg';
import CSSLogo from './images/logo/css3-color.svg';
import javascriptLogo from './images/logo/javascript-color.svg';
import reactLogo from './images/logo/react-color.svg';
import nodeLogo from './images/logo/nodedotjs-color.svg';
import gitLogo from './images/logo/git-color.svg';
import gitHubLogo from './images/logo/github-color.svg';
import pythonLogo from './images/logo/python-color.svg';

const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: CSSLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: gitHubLogo },
  { name: 'Python', logo: pythonLogo }
];

const Home = () => {
  const [activeSkill, setActiveSkill] = useState(null);

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

    {/* SoftwareIQ Review Project */}
    <section className="project-item">
      <h3>SoftwareIQ</h3>
      <p>
      SoftwareIQ is an investor-grade research platform designed for the software industry. SoftwareIQ combines deep industry knowledge with advanced technology to deliver a research experience that's accurate, comprehensive, and easy to navigate. From market trends to financial data, we provide a platform that covers the full spectrum of software investment opportunities.
      <br /><br />
      <strong>Tech Stack:</strong> React, jQuery, JavaScript, Material UI, CSS, AJAX, JSON, APIs, MongoDB
      </p>
      <a href="https://www.softwareiq.io/" target="_blank" rel="noopener noreferrer">View Project</a>
    </section>

    {/* Skincare Review Project */}
    <section className="project-item">
      <h3>Skincare Review</h3>
      <p>
        Skincare Review is a web application designed for skincare enthusiasts to make informed decisions about products based on genuine user reviews, free from advertising and brand partnerships. Focused on facial skincare products, the platform allows users to share their experiences with specific products, helping others choose the best options for skin improvement.
        <br /><br />
        <strong>Tech Stack:</strong> React, jQuery, JavaScript, CSS, AJAX, JSON, APIs, PostgreSQL
      </p>
      <a href="https://github.com/Carlinha23/skin-care" target="_blank" rel="noopener noreferrer">View Project</a>
    </section>

    {/* Software News Project */}
    <section className="project-item">
      <h3>Software News</h3>
      <p>
      Software News is a dynamic news aggregator website tailored for software enthusiasts, developers, and tech professionals who want to stay informed about the latest trends, technologies, and innovations in the software industry. The platform gathers news from various credible sources, ensuring users have access to comprehensive, real-time updates on key developments such as software releases, industry reports, and emerging technologies.
      <br /><br />
        <strong>Tech Stack:</strong> Python, Flask, Bootstrap, PostgreSQL
      </p>
      <a href="https://github.com/Carlinha23/news" target="_blank" rel="noopener noreferrer">View Project</a>
    </section>

  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li
              key={index}
              className={activeSkill === index ? 'activeSkill' : ''}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
              <span className="hiddenText">{skill.name}</span>
            </li>
          ))}
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
