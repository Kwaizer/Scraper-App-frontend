import React from 'react';
import './JobsList.css'; 

const JobsList = ({ data }) => (
  <div className="job-list-container">
    {data && data.jobs ? (
      data.jobs.map((job) => (
        <div className="job-item" key={job.more_info}>
          <p>Company: {job.company_name}</p>
          <p>Title: {job.job_title}</p>
          <p>More: <a href= { job.more_info } target="blank">{job.more_info}</a></p>
          <p>Date: {job.published_date}</p>
          <p>Salary: {job.salary}</p>
          <p>Skills: {job.skills}</p>
          <hr />
        </div>
      ))
    ) : (
      <p>Loading or no data available</p>
    )}
  </div>
);

export default JobsList;
