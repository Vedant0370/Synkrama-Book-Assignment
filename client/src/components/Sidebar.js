// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-light sidebar p-4" style={{ width: '250px' }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add Book</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
