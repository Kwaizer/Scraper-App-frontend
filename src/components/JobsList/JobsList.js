import React, { useState, useEffect } from 'react';
import './JobsList.css';
import axios from 'axios';

const JobsList = ({ data }) => {
  const [likedJobs, setLikedJobs] = useState({});

  // Initialize local state with backend data
  useEffect(() => {
    const initialLikedJobs = {};
    if (data && data.jobs) {
      data.jobs.forEach((job) => {
        initialLikedJobs[job.link] = job.is_liked;
      });
    }
    setLikedJobs(initialLikedJobs);
  }, [data]);

  const handleLikeToggle = async (job) => {
    const jobKey = job.link;
    const isLiked = likedJobs[jobKey];

    try {
      if (isLiked) {
        // Unlike the job
        await axios.delete('/api/jobs/like', { data: { jobKey } });
      } else {
        // Like the job
        await axios.post('/api/jobs/like', job);
      }

      // Update local state
      setLikedJobs((prev) => ({
        ...prev,
        [jobKey]: !isLiked,
      }));
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  return (
    <div className="job-list-container">
      {data && data.jobs ? (
        data.jobs.map((job) => {
          const isLiked = likedJobs[job.link];
          return (
            <div className="job-item" key={job.link}>
              <p>Date: {job.pub_date}</p>
              <p>Title: {job.title}</p>
              <p>Liked: {String(isLiked)}</p>
              <p>
                More: <a href={job.link} target="_blank" rel="noopener noreferrer">{job.link}</a>
              </p>
              <button
                className={`like-button ${isLiked ? 'liked' : ''}`}
                onClick={() => handleLikeToggle(job)}
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
