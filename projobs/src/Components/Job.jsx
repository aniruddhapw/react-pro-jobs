import React from 'react';

const Job = ({ job }) => {
  return (
    <div className='jobContainer'>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Location: {job.location.display_name}</p>
      <p>Salary: {job.salary_min} - {job.salary_max} {job.salary_currency}</p>
      <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">Apply</a>
    </div>
  );
};

export default Job;
