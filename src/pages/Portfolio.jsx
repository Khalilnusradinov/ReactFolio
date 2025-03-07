import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

const projects = [
  { id: 1, title: 'ReadMeFactory', github: 'https://github.com/Khalilnusradinov' },
  { id: 2, title: 'AutoForge', github: 'https://github.com/Khalilnusradinov' },
];

const Portfolio = () => (
  <section className="portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project) => <Project key={project.id} {...project} />)}
    </div>
  </section>
);

export default Portfolio;
