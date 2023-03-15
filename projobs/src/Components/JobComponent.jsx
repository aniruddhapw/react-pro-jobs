import React from 'react';
import Job from './Job';

const JobComponent = ({ jobs }) => {
  return (
    <div className='allJobs'>
      {jobs.map(job => <Job key={job.id} job={job} />)}
    </div>
  );
};

export default JobComponent;