import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
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
    <div className="project-item">
      <h3>SoftwareIQ</h3>
      <p>
      SoftwareIQ is a full-stack SaaS analytics platform for visualizing trends and performance across the B2B software industry. Built with React and Python, it integrates dynamic dashboards, interactive charts, and real-time data ingestion from public and private sources. Users can explore KPIs, filter comparable metrics, and access premium content through Auth0-secured login and Stripe-powered subscriptions.
      <br /><br />
      <strong>Tech Stack:</strong> React, JavaScript, Material UI, AG Grid, Nivo, Python, MongoDB, AWS, Auth0, Stripe.
      </p>
      <a href="https://www.softwareiq.io/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

    {/* Skincare Review Project */}
    <div className="project-item">
      <h3>Invest DECODED</h3>
      <p>
      Invest DECODED is a responsive, bilingual personal finance education platform built with React, AWS and Auth0, featuring secure Stripe payment integration and role-based content access. Users can sign up, choose lessons in English or Portuguese, and unlock premium content after completing payment.
        <br /><br />
        <strong>Tech Stack:</strong> React, JavaScript, CSS, JSON, APIs, AWS, Auth0, Stripe, Axios & Fetch, Icons8 / Font Awesome.
      </p>
      <a href="https://investdecoded.com/" target="_blank" rel="noopener noreferrer">View Project</a>
    </div>

    {/* Software News Project */}
    <div className="project-item">
      <h3>Software News</h3>
      <p>
      Software News is a dynamic news aggregator website tailored for software enthusiasts, developers, and tech professionals who want to stay informed about the latest trends, technologies, and innovations in the software industry. The platform gathers news from various credible sources, ensuring users have access to comprehensive, real-time updates on key developments such as software releases, industry reports, and emerging technologies.
      <br /><br />
        <strong>Tech Stack:</strong> Python, Flask, Bootstrap, PostgreSQL.
      </p>
      <a href="https://github.com/Carlinha23/news" target="_blank" rel="noopener noreferrer">View Details</a>
    </div>

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
