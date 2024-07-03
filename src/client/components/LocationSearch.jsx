import React, { useState, useEffect } from 'react';
import RestroomList from './RestroomList.jsx';
import OpenCage from 'opencage-api-client';

const LocationSearch = () => {
  // TODO: render a search bar
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [postcode, setPostcode] = useState(null);
  const [phz, setPhz] = useState(null);

  // Geolocation code

  // TODO: Fix eslint error
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

  // Get latitude & longitude

  // TODO: Does this need to be in its own useEffect? Probably not...
  useEffect(() => {
    getLatLong();
  });

  // Reverse geocode to get location

  useEffect(() => {
    if (latitude && longitude) {
      // OpenCage code
      const opencage_api_key = process.env['OPENCAGE_API_KEY'];
      const query = latitude + ',' + longitude;
      const api_url = 'https://api.opencagedata.com/geocode/v1/json';
      const request_url =
        api_url +
        '?' +
        'key=' +
        opencage_api_key +
        '&q=' +
        encodeURIComponent(query) +
        '&pretty=1' +
        '&no_annotations=1';
      // TODO: Refactor to use Fetch API
      var request = new XMLHttpRequest();
      request.open('GET', request_url, true);

      request.onload = function () {
        // see full list of possible response codes:
        // https://opencagedata.com/api#codes

        if (request.status === 200) {
          // Success!
          const data = JSON.parse(request.responseText);
          const postcode = data.results[0].components.postcode;
          setPostcode(postcode);
          // alert(data.results[0].formatted); // print the location
          const address = data.results[0].formatted;
          setAddress(address);
          // console.log('results....', data.results[0].formattted);
        } else if (request.status <= 500) {
          // We reached our target server, but it returned an error

          console.log('unable to geocode! Response code: ' + request.status);
          const data = JSON.parse(request.responseText);
          console.log('error msg: ' + data.status.message);
        } else {
          console.log('server error');
        }
      };

      request.onerror = function () {
        // There was a connection error of some sort
        console.log('unable to connect to server');
      };

      request.send(); // make the request
    }
  }, [latitude, longitude, getLatLong]);

  // Get Plant Hardiness Zone based on postcode
  // if (postcode) {
  //   fetch(`https://phzmapi.org/${postcode}.json`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('Data received:', data.zone);
  //       setPhz(data.zone);
  //     })
  //     .catch((error) => {
  //       console.error('There was a problem with the fetch operation:', error);
  //     });
  // }

  // Render react component
  return (
    <div>
      <form id="form-search">
        <input
          type="Search"
          id="input-search"
          placeholder={'Enter a location'}
          value={address}
          readOnly
        ></input>
        <button>Search</button>
      </form>
      <div>
        <RestroomList latitude={latitude} longitude={longitude} />
      </div>
    </div>
  );
};

export default LocationSearch;
