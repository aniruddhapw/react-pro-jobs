import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const YOUR_APP_ID="0b164711";
  const YOUR_APP_KEY="001b1ef1449300fc2d650bd11ed21776";

  const handleSearch = () => {
    axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&results_per_page=20&what=${keyword}&where=${location}&content-type=application/json`)
      .then(response => {
        onSearch(response.data.results);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='searchBox'>
      <label htmlFor="keyword">Keyword:</label>
      <input type="text" id="keyword" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <label htmlFor="location">Location:</label>
      <input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
