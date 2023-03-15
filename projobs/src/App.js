import { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import JobComponent from './Components/JobComponent';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleSearch = (results) => {
    setJobs(results);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <JobComponent jobs={jobs} />
    </div>
  );
};

export default App;
