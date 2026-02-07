import React from 'react';
import linkedinLogo from './images/logo/linkedin-color.svg';
import gitHubLogo from './images/logo/github-color.svg';
import './Footer.css'; // Assuming you will style it in a separate CSS file

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/carla-rodriguesm/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="footer-logo" />
          </a>
          <a 
            href="https://github.com/Carlinha23" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={gitHubLogo} alt="GitHub" className="footer-logo" />
          </a>
        </div>
        <p className="footer-text">CARLA MATURO @2026</p>
      </footer>
    );
  }
  
  export default Footer;
