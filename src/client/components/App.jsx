import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import RestroomList from './RestroomList.jsx';

const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);

  function getLatLong() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  useEffect(() => {
    getLatLong();
  });

  // Reverse geocode to get location

  // useEffect(() => {
  //   if (latitude && longitude) {
  //     // OpenCage code
  //     const opencage_api_key = process.env['OPENCAGE_API_KEY'];
  //     const query = latitude + ',' + longitude;
  //     const api_url = 'https://api.opencagedata.com/geocode/v1/json';
  //     const request_url =
  //       api_url +
  //       '?' +
  //       'key=' +
  //       opencage_api_key +
  //       '&q=' +
  //       encodeURIComponent(query) +
  //       '&pretty=1' +
  //       '&no_annotations=1';
  //     // TODO: Refactor to use Fetch API
  //     var request = new XMLHttpRequest();
  //     request.open('GET', request_url, true);

  //     request.onload = function () {
  //       // see full list of possible response codes:
  //       // https://opencagedata.com/api#codes

  //       if (request.status === 200) {
  //         // Success!
  //         const data = JSON.parse(request.responseText);
  //         const postcode = data.results[0].components.postcode;
  //         // alert(data.results[0].formatted); // print the location
  //         const address = data.results[0].formatted;
  //         setAddress(address);
  //         // console.log('results....', data.results[0].formattted);
  //       } else if (request.status <= 500) {
  //         // We reached our target server, but it returned an error

  //         console.log('unable to geocode! Response code: ' + request.status);
  //         const data = JSON.parse(request.responseText);
  //         console.log('error msg: ' + data.status.message);
  //       } else {
  //         console.log('server error');
  //       }
  //     };

  //     request.onerror = function () {
  //       // There was a connection error of some sort
  //       console.log('unable to connect to server');
  //     };

  //     request.send(); // make the request
  //   }
  // }, [latitude, longitude, getLatLong]);

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
      <Search />
      <div>
        {latitude}
        {longitude}
      </div>
      <RestroomList latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default App;
