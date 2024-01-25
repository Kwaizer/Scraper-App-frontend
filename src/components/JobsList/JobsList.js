import React, { useState } from 'react';
import './JobsList.css';

const JobsList = ({ data }) => {
  const [likedJobs, setLikedJobs] = useState({});

  const handleLikeToggle = (jobKey) => {
    setLikedJobs((prev) => ({
      ...prev,
      [jobKey]: !prev[jobKey], // Toggle the like status for the job
    }));
  };

  return (
    <div className="job-list-container">
      {data && data.jobs ? (
        data.jobs.map((job) => {
          const isLiked = likedJobs[job.more_info]; // Check if the job is liked
          return (
            <div className="job-item" key={job.more_info}>
              <p>Company: {job.company_name}</p>
              <p>Title: {job.job_title}</p>
              <p>
                More: <a href={job.more_info} target="blank">{job.more_info}</a>
              </p>
              <p>Date: {job.published_date}</p>
              <p>Salary: {job.salary}</p>
              <p>Skills: {job.skills}</p>
              <button
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={() => handleLikeToggle(job.more_info)}
              >
                {isLiked ? 'Unsave' : 'Save'}
              </button>
              <hr />
            </div>
          );
        })
      ) : (
        <p>Loading or no data available</p>
      )}
    </div>
  );
};

export default JobsList;
