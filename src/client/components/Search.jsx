import React, { useState, useEffect } from 'react';

export default function Search() {
  const [inputValue, setInputValue] = useState('');
  const [location, setLocation] = useState('');

  function search(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const input = formData.get('query');
    setInputValue(input);
  }

  useEffect(() => {
    console.log('Search input:', inputValue);
  });

  useEffect(() => {
    if (inputValue) {
      // OpenCage code
      const opencage_api_key = process.env['OPENCAGE_API_KEY'];
      const query = inputValue;
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
          console.log('data', data);
        })
        .catch((error) => {
          console.error('Error:', error.message);
        });
    }
  }, [inputValue]);

  return (
    <form onSubmit={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
