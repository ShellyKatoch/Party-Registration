import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import Logout from './Logout';
import { getCookie } from './Cookie';
const Navbar = () => {

  const isAuthenticated = getCookie("user")
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img
          src="https://crystalpng.com/wp-content/uploads/2023/05/bjp-logo-png.png" // Replace with your logo's path
          alt="Party Logo"
          className="logo"
        />
        <h1 className="navbar-title">Aam Admi Party</h1>
      </div>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/events" className="nav-link">Events</Link>
        </li>
      </ul>

      {/* Login and Logout Links */}
      <div className="navbar-auth">
       {isAuthenticated ?  <Logout /> : <Link to="/login" className="nav-link">Login</Link>} 
     
      </div>
    </nav>
  );
};

export default Navbar;
