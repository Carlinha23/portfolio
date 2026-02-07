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
import awsLogo from './images/logo/aws-2.svg';
import postgresqlLogo from './images/logo/postgresql-inc.svg';
import mongodbLogo from './images/logo/mongodb-icon-2.svg';
import llmLogo from './images/logo/llm-color.svg';

const skills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: CSSLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'LLMs', logo: llmLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: gitHubLogo }
];

const projects = [
  {
    id: 'softwareiq',
    title: 'SoftwareIQ',
    shortDesc: 'SoftwareIQ is a full-stack SaaS analytics platform that tracks and visualizes performance across the B2B software industry. It combines a React dashboard experience (interactive tables, filters, and charts) with Python data pipelines and a serverless AWS backend to ingest, normalize, and query datasets at scale. Authentication and paid access are handled through Auth0 and Stripe.',
    longDesc: 'I built SoftwareIQ end-to-end: a data + analytics web app designed to help users explore KPIs, comparable company metrics, and industry trend dashboards. On the frontend, I implemented modular React components with Material UI and AG Grid to support fast filtering, sorting, and drill-downs, paired with interactive charting for time-series exploration. On the backend, I engineered Python pipelines to collect and transform structured/unstructured data from multiple sources and stored the results in MongoDB for flexible analytics queries. The platform runs on AWS serverless infrastructure (Lambda + S3 + API Gateway/CDK) with Auth0 authentication and Stripe subscription workflows (including webhook handling) to gate premium features.',
    techStack: 'React, JavaScript, Material UI, AG Grid, Nivo, Python, MongoDB, AWS, Auth0, Stripe.',
    link: 'https://www.softwareiq.io/',
    linkText: 'View Project'
  },
  {
    id: 'investdecoded',
    title: 'Invest DECODED',
    shortDesc: 'Invest DECODED is a bilingual (EN/PT) personal finance and investing learning platform with role-based access control and Stripe-powered payments. Users can create an account, choose a language, and unlock premium lessons after checkout through an Auth0-secured experience. The app emphasizes responsive UI, clean UX, and secure content gating.',
    longDesc: 'I designed and built a bilingual education platform that delivers free and paid course content based on user entitlements. The frontend uses React/Next.js with Context-based state management for authentication state, user roles, and internationalization (language toggle + translated content). The backend is implemented with Node.js on AWS serverless (Lambda + API Gateway) with storage in S3 and DynamoDB. Stripe Checkout and webhook logic update user access after successful payment, enabling secure premium content gating. I also translated Figma designs into responsive components, improved load performance via code-splitting/lazy loading, and added tests with Jest.',
    techStack: 'React, Next.js, JavaScript, AWS (Lambda, S3, API Gateway, DynamoDB), Auth0, Stripe, Jest.',
    link: 'https://investdecoded.com/',
    linkText: 'View Project'
  },
  {
    id: 'softwarenews',
    title: 'Software News',
    shortDesc: 'Software News is a lightweight news aggregator for software and tech updates. It collects articles from multiple sources, normalizes the content, and stores results in PostgreSQL for quick retrieval. The platform presents a clean, responsive browsing experience using Flask and Bootstrap, allowing users to stay informed about the latest software releases, industry reports, and emerging technologies.',
    longDesc: 'I built a Flask-based web app that aggregates software industry news and presents it through a straightforward, responsive interface. The backend retrieves articles from multiple feeds/sources, normalizes them, and stores them in PostgreSQL to support fast page loads and consistent browsing. The UI uses Bootstrap for a clean layout and mobile-friendly responsiveness.',
    techStack: 'Python, Flask, Bootstrap, PostgreSQL.',
    link: 'https://github.com/Carlinha23/news',
    linkText: 'View Details'
  }
];

const Home = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showExploreModal, setShowExploreModal] = useState(false);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    setShowExploreModal(true);
  };

  const handleNavClick = (sectionId) => {
    setShowExploreModal(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="Home">

      {/* Hero Section - Cover Page */}
      <section className="hero">
        {/* Animated code writing background */}
        <div className="hero-bg-animation">
          {/* Left side code */}
          <div className="code-block left-code">
            <span className="code-text t1">const developer = {'{'}</span>
            <span className="code-text t2">&nbsp;&nbsp;name: "Carla",</span>
            <span className="code-text t3">&nbsp;&nbsp;skills: ["React", "Node"],</span>
            <span className="code-text t4">&nbsp;&nbsp;passionate: true,</span>
            <span className="code-text t5">{'}'}</span>
          </div>

          {/* Right side code */}
          <div className="code-block right-code">
            <span className="code-text t6">function buildApp() {'{'}</span>
            <span className="code-text t7">&nbsp;&nbsp;return &lt;App /&gt;;</span>
            <span className="code-text t8">{'}'}</span>
          </div>

          {/* Top floating code */}
          <span className="code-text floating f1">&lt;html&gt;</span>
          <span className="code-text floating f2">import React from 'react';</span>
          <span className="code-text floating f3">npm install</span>
          <span className="code-text floating f4">&lt;div className="app"&gt;</span>
          <span className="code-text floating f5">export default</span>
          <span className="code-text floating f6">git commit -m "init"</span>
          <span className="code-text floating f7">async/await</span>
          <span className="code-text floating f8">useState()</span>
          <span className="code-text floating f9">.map(item =&gt; )</span>
          <span className="code-text floating f10">&lt;Component /&gt;</span>
          <span className="code-text floating f11">MongoDB.connect()</span>
          <span className="code-text floating f12">res.json(data)</span>
          <span className="code-text floating f13">SELECT * FROM</span>
          <span className="code-text floating f14">pip install flask</span>
          <span className="code-text floating f15">docker-compose up</span>
        </div>
        <div className="hero-content">
          <h1>Carla Rodrigues Maturo</h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-tagline">Building user-focused web experiences</p>
          <div className="hero-buttons">
            <button className="hero-cta" onClick={handleExploreClick}>Explore</button>
            <a href="/Carla-Software-Engineer.pdf" className="hero-resume" download>Download Resume</a>
          </div>
        </div>
        <a href="#about" className="scroll-indicator">
          <span className="scroll-arrow"></span>
        </a>

        {/* Explore Modal */}
        {showExploreModal && (
          <div className="explore-modal-overlay" onClick={() => setShowExploreModal(false)}>
            <div className="explore-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowExploreModal(false)}>&times;</button>
              <h2>Explore My Portfolio</h2>
              <div className="modal-cards">
                <div className="modal-card" onClick={() => handleNavClick('about')}>
                  <span className="modal-icon">👋</span>
                  <h3>About Me</h3>
                  <p>Learn about my background and passion</p>
                </div>
                <div className="modal-card" onClick={() => handleNavClick('projects')}>
                  <span className="modal-icon">💻</span>
                  <h3>Projects</h3>
                  <p>See my latest work and case studies</p>
                </div>
                <div className="modal-card" onClick={() => handleNavClick('skills')}>
                  <span className="modal-icon">🛠️</span>
                  <h3>Skills</h3>
                  <p>Technologies I work with</p>
                </div>
                <div className="modal-card" onClick={() => handleNavClick('contact')}>
                  <span className="modal-icon">📧</span>
                  <h3>Contact</h3>
                  <p>Let's connect and collaborate</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

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
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-item ${expandedProject === project.id ? 'expanded' : ''}`}
          >
            <h3>{project.title}</h3>
            <p className="project-short-desc">{project.shortDesc}</p>

            {project.longDesc && (
              <>
                <div className={`project-long-desc ${expandedProject === project.id ? 'show' : ''}`}>
                  <p>{project.longDesc}</p>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => toggleProject(project.id)}
                >
                  {expandedProject === project.id ? 'Read Less' : 'Read More'}
                </button>
              </>
            )}

            <p className="project-tech">
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <img src={skill.logo} alt={`${skill.name} Logo`} className="skill-logo" />
              <span className="skill-name">{skill.name}</span>
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
