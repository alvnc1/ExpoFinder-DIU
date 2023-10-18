import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/themes">Themes</Link></li>
        <li><Link to="/past-versions">Past Versions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

