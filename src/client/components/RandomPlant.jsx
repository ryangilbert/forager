import React, { useState, useEffect } from 'react';

const RandomPlant = ({ phz }) => {
  //   const [commonName, setCommonName] = useState(null);
  //   const [scientificName, setScientificName] = useState(null);
  //   const [image, setImage] = useState(null);
  const [allPlants, setAllPlants] = useState(null);
  //   let allPlants = {};

  // Get plant from Perenual API

  // const perenual_api_key = process.env['PERENUAL_API_KEY'];
  //   fetch(
  //     `https://perenual.com/api/species-list?key=${perenual_api_key}&edible=1&hardiness=1-13`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('Perenual received:', data);
  //       //   setAllPlants(data);
  //     })
  //     .catch((error) => {
  //       console.error('There was a problem with the fetch operation:', error);
  //     });

  // useEffect(() => {
  //   let dataGlobal;

  //   const getData = async () => {
  //     const response = await fetch(
  //       `https://perenual.com/api/species-list?key=${perenual_api_key}&edible=1&hardiness=1-13`
  //     );
  //     const data = await response.json();
  //     dataGlobal = data;
  //     return data;
  //   };

  //   (async () => {
  //     await getData();
  //     console.log('dataGlobal', dataGlobal);
  //   })();
  // });

  return (
    <div>
      <div>Random plant</div>
      <div>From Plant Hardiness Zone: {phz}</div>
    </div>
  );
};

export default RandomPlant;
