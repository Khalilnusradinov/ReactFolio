import React from 'react';
import './Resume.css';

const Resume = () => (
  <section className="resume">
    <h2>Resume</h2>
    <a href="/resume.pdf" download className="resume-download">Download My Resume</a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript (ES6+)</li>
      <li>React.js</li>
      <li>Node.js & Express.js</li>
      <li>MongoDB & SQL</li>
      <li>CSS & Sass</li>
      <li>Git & GitHub</li>
    </ul>
  </section>
);

export default Resume;
