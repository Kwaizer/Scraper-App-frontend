// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Job Scraper App</h1>
      <nav>
        <a href="/">Home</a>
        <a href="https://github.com/Kwaizer/Scraper-App-backend.git" target="blank">About</a>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
}

export default Header;
