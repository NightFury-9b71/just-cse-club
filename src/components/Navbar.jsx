// components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./Navbar.css";

const Navbar = ({ onNavClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/" onClick={() => onNavClick("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={() => onNavClick("events")}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/notices" onClick={() => onNavClick("notices")}>
            Notices
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => onNavClick("home")}>
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
