import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'; // Add custom styles here
const Home = () => {
  return (
  <div className="welcome-container">
      <h1>Welcome to the Job Scraper App</h1>
      <p>Choose a site to scrape jobs:</p>
      <nav className="button-container">
          <Link to="/jobs?site=Djinni" className="nav-button">
              Djinni
          </Link>
          <Link to="/jobs?site=Dou" className="nav-button">
              Dou
          </Link>
      </nav>
  </div>
  );
}

export default Home;
