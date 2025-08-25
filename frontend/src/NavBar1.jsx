import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ showHomeButton }) => {
  const [open, setOpen] = useState(false);
  const [navH, setNavH] = useState(0);
  const navRef = useRef(null);

  // Measure real navbar height and keep a spacer below it
  useLayoutEffect(() => {
    const update = () => setNavH(navRef.current?.offsetHeight || 0);
    update();

    const ro = new ResizeObserver(update);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [open]);

  // Smooth-scroll only for in-page # links, and close menu after click
  useEffect(() => {
    const handleScroll = (e) => {
      const href = e.currentTarget.getAttribute('href') || '';
      if (!href.startsWith('#')) return; // allow normal links (e.g., "/")
      e.preventDefault();

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop, behavior: 'smooth' });
        setOpen(false);
      }
    };

    const navLinks = document.querySelectorAll('.navbar-custom a[href^="#"]');
    navLinks.forEach((link) => link.addEventListener('click', handleScroll));
    return () => navLinks.forEach((link) => link.removeEventListener('click', handleScroll));
  }, []);

  // Close on ESC and when resizing to desktop
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => { if (window.innerWidth >= 821) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="navbar-custom navbar-fixed-top">
        <div className="container navbar-row">
          <div className="navbar-header">
            <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
              Carla Rodrigues Maturo
            </NavLink>

            {/* Hamburger */}
            <button
              className={`menu-toggle ${open ? 'is-open' : ''}`}
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

          <ul id="primary-navigation" className={`navbar-nav ${open ? 'is-open' : ''}`}>
            {showHomeButton ? (
              <li className="nav-item">
                <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
                  Back to Home
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Spacer = exact nav height so content never sits under the fixed bar */}
      <div className="navbar-spacer" style={{ height: navH }} aria-hidden="true" />
    </>
  );
};

export default NavBar;

