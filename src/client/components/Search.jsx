import React, { useState, useEffect } from 'react';

export default function Search(props) {
  // const [inputValue, setInputValue] = useState('');
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState('');

  // function handleSearch(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const input = formData.get('query');
  //   setInputValue(input);
  // }

  useEffect(() => {
    console.log('Search input:', props.inputValue);
  });

  useEffect(() => {
    if (props.inputValue) {
      // OpenCage code
      const opencage_api_key = process.env['OPENCAGE_API_KEY'];
      const query = props.inputValue;
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

      fetch(request_url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(
              `Unable to geocode! Response code: ${response.status}`
            );
          }
        })
        .then((data) => {
          console.log('data', data.results[0].geometry);
          props.setLatitude(data.results[0].geometry.lat);
          props.setLongitude(data.results[0].geometry.lng);
        })
        .catch((error) => {
          console.error('Error:', error.message);
        });
    }
  }, [props.inputValue]);

  return (
    <div>
      <form onSubmit={props.handleSearch}>
        <input name="query" />
        <button type="submit">Search</button>
      </form>
      {/* <div>
        {latitude}
        {longitude}
      </div> */}
    </div>
  );
}
