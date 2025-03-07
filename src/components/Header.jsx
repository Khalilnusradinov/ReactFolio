import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>ReactFolio</h1>
    <nav>
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  </header>
);

export default Header;
