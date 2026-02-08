import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
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
          <h1 className="typing-name">Carla Rodrigues Maturo</h1>
          <p className="hero-title">Full Stack Developer</p>
          <p className="hero-tagline">Building user-focused web experiences</p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="hero-cta">Explore</Link>
            <a href="/Carla-Software-Engineer.pdf" className="hero-resume" download>Download Resume</a>
          </div>
        </div>
        <Link to="/portfolio" className="scroll-indicator">
          <span className="scroll-arrow"></span>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
