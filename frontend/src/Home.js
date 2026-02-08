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
    techStack: 'React, Next.js, JavaScript, AWS (Lambda, S3, API Gateway, DynamoDB), Auth0, Stripe.',
    link: 'https://investdecoded.com/',
    linkText: 'View Project'
  },
  {
    id: 'seattlekidsparty',
    title: 'Seattle Kids Party',
    shortDesc: 'Seattle Kids Party is a marketing website built in Next.js for a kids party decoration and events company in the Seattle area. The site showcases party packages and rental equipment with clear calls-to-action, fast performance, and mobile-first responsive design. Leads are captured through a Formspree-powered contact form for simple, reliable inquiries without maintaining a custom backend.',
    longDesc: 'I built Seattle Kids Party as a production-ready Next.js website to support customer acquisition for a kids party decoration + events business. The site is optimized for marketing use cases: clear package pages, equipment browsing, strong CTAs, and a streamlined contact workflow. I integrated the "Contact" experience using Formspree to route form submissions securely and reduce backend complexity, while keeping the UI responsive and performant across devices.',
    techStack: 'Next.js, React, JavaScript, CSS/Tailwind, Formspree.',
    link: 'https://seattlekidsparty.com/',
    linkText: 'View Project'
  }
];

const Home = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitting: false, succeeded: false, error: null });

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const openContactModal = () => {
    setShowContactModal(true);
    setFormStatus({ submitting: false, succeeded: false, error: null });
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, succeeded: false, error: null });

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xdalogrg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ submitting: false, succeeded: true, error: null });
      } else {
        setFormStatus({ submitting: false, succeeded: false, error: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setFormStatus({ submitting: false, succeeded: false, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div className="Home">

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
        <img src={me} alt="Carla" className="about-image" />
          <div className="about-text">
            <p>
              Welcome! I’m Carla, a full-stack engineer with a product mindset. I build and iterate on real-world applications, with a current focus on SoftwareIQ, where I own delivery across the frontend experience, backend data workflows, and release improvements based on user needs. I enjoy turning ambiguous problems into clear roadmaps and shipped features. My background in data analysis taught me how to work with complex datasets, validate results, and communicate decisions clearly.
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
        <p>
          Email: <button onClick={openContactModal} className="contact-email-link">moraescarla23@gmail.com</button>
        </p>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="contact-modal-overlay" onClick={closeContactModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="contact-modal-close" onClick={closeContactModal}>&times;</button>
            <h3>Get in Touch</h3>
            {formStatus.succeeded ? (
              <p className="contact-success">Thanks for your message! I'll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                />
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                />
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                />
                {formStatus.error && (
                  <p className="contact-error">{formStatus.error}</p>
                )}
                <button type="submit" disabled={formStatus.submitting}>
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
