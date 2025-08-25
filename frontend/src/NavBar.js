import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./images/logo.png";

const NavBar = ({ showHomeButton }) => {
  const [open, setOpen] = useState(false);

  // Smooth scroll only for in-page hash links (#about, #skills, etc.)
  const handleAnchorClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute("href") || "";
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        setOpen(false); // close menu after navigating
      }
    }
  }, []);

  // Close menu on ESC or when window resizes to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className="navbar-custom navbar-fixed-top">
      <div className="container navbar-row">
        {/* Brand + hamburger */}
        <div className="navbar-header">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="Portfolio Logo" className="logo" />
          </NavLink>

          <button
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>

        {/* Links */}
        <ul
          id="primary-navigation"
          className={`navbar-nav ${open ? "is-open" : ""}`}
        >
          {showHomeButton ? (
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
                Back to Home
              </NavLink>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={handleAnchorClick}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link" onClick={handleAnchorClick}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link" onClick={handleAnchorClick}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={handleAnchorClick}>
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
