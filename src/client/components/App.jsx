import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import RestroomList from './RestroomList.jsx';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);

  function handleSearch(event) {
    console.log('back here');
    event.preventDefault();
    const formData = new FormData(event.target);
    const input = formData.get('query');
    setInputValue(input);
  }

  return (
    <div>
      <h1>Rapid Refuge</h1>
      <div>
        Powered by{' '}
        <a href="https://refugerestrooms.org/">refugerestrooms.org</a>
        <br></br>
        <br></br>
      </div>
      {/* <LocationSearch /> */}
      <Search
        handleSearch={handleSearch}
        inputValue={inputValue}
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      <div>
        {latitude}
        {longitude}
      </div>
      <RestroomList latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default App;
