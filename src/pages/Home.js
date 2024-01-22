import React from 'react';
import {  createBrowserRouter, RouterProvider, BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
const Home = () => {
  return (
    <div>
         <h1>Welcome to the Job Scraper App</h1>
         <p>Choose a site to scrape jobs:</p>
         <nav>
           <ul>
             <li>
               <Link to="/jobs?site=Djinni">Djinni</Link>
             </li>
             <li>
               <Link to="/jobs?site=Dou">Dou</Link>
             </li>
           </ul>
         </nav>
         <hr />
         {/* <Routes>
           <Route path="/jobs" element={<Jobs />} />
         </Routes> */}
       </div>
  );
}

export default Home;
