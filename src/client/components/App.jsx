import React from 'react';
import LocationSearch from './LocationSearch.jsx';

const App = () => {
  return (
    <div>
      <h1>Rapid Refuge</h1>
      <div>
        Powered by{' '}
        <a href="https://refugerestrooms.org/">refugerestrooms.org</a>
        <br></br>
        <br></br>
      </div>
      <LocationSearch />
    </div>
  );
};

export default App;
