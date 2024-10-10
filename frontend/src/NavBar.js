import React, { useEffect } from 'react';
import './NavBar.css'; // You'll need to add styles here

const NavBar = () => {

  useEffect(() => {
    // Smooth scrolling effect
    const handleScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
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
          <a className="navbar-brand" href="#about">Carla Rodrigues Maturo</a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
