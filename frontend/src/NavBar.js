import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ showHomeButton }) => {
  useEffect(() => {
    // Smooth scrolling effect
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    const navLinks = document.querySelectorAll(".navbar-custom a");

    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      // Clean up event listeners on unmount
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <nav className="navbar-custom navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <NavLink to="/" className="navbar-brand">Carla Rodrigues Maturo</NavLink>
        </div>
        <ul className="navbar-nav">
          {showHomeButton ? (
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Back to Home</NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="#about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#skills" className="nav-link">Skills</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#projects" className="nav-link">Projects</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="#contact" className="nav-link">Contact</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
