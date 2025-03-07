import React from 'react';
import './Project.css';

const Project = ({ title, image, deployed, github }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={deployed} target="_blank" rel="noopener noreferrer">Live Demo</a>
    <a href={github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;
