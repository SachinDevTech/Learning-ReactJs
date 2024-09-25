import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>Tech</li>
        <li>Nature</li>
        <li>Animals</li>
        <li>People</li>
      </ul>
    </nav>
  );
};

export default Navbar;
