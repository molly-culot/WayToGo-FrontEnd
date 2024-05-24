// Navbar.js
import React from 'react';
import logo from './waytogo.png';
import './Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="waytogo Logo" className="logo" />
      </div>
      <div className="pages">
        <a href="/">Log Schedule</a>
        <a href="/">View Schedule</a>
        <a href="/">Bus Report</a>
      </div>
    </div>
  );
}

export default Navbar;
