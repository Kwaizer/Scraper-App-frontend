import React, { useState } from 'react';
import './JobsList.css';
import axios from 'axios'; // For making API calls

const JobsList = ({ data }) => {
  const [likedJobs, setLikedJobs] = useState({});

  const handleLikeToggle = async (job) => {
    const jobKey = job.more_info;
    const isLiked = likedJobs[jobKey];

    try {
      if (isLiked) {
        // Unlike the job
        await axios.delete('/api/jobs/like', { data: { jobKey } });
      } else {
        // Like the job
        await axios.post('/api/jobs/like', job);
      }

      // Update state
      setLikedJobs((prev) => ({
        ...prev,
        [jobKey]: !prev[jobKey],
      }));
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  return (
    <div className="job-list-container">
      {data && data.jobs ? (
        data.jobs.map((job) => {
          const isLiked = likedJobs[job.more_info];
          return (
              <div className="job-item" key={job.more_info}>
                <p>Date: {job.pub_date}</p>
                <p>Title: {job.title}</p>
                <p>
                  More: <a href={job.link} target="blank">{job.link}</a>
                </p>
                <button
                    className={`like-button ${isLiked ? 'liked' : ''}`}
                    onClick={() => handleLikeToggle(job)}
                >
                  {isLiked ? 'Unsave' : 'Save'}
                </button>
                <hr/>
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
