import React, { useState, useEffect } from 'react';

const RestroomList = ({ latitude, longitude }) => {
  const [restroomList, setRestroomList] = useState([]);

  useEffect(() => {
    if (latitude && longitude) {
      const getData = async () => {
        const response = await fetch(
          `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=${latitude}&lng=${longitude}`
        );
        const data = await response.json();
        setRestroomList(data);
        return data;
      };

      (async () => {
        await getData();
      })();
    }
  });

  useEffect(() => {
    if (restroomList[0]) {
      console.log('restroomList:', restroomList[0].name);
    }
  }, [restroomList]);

  let restroomComponent;
  if (restroomList[0]) {
    console.log(restroomList[0]);
    restroomComponent = restroomList.map((restroom, index) => {
      return (
        <div className="location" key={index}>
          <h3>{restroom.name}</h3>
          <div>{restroom.street}</div>
          <div>
            {restroom.city},{restroom.state}
          </div>
          {/* <div>{restroom.state}</div> */}
          <div>{Math.round(restroom.distance * 100) / 100} miles away</div>
          <div>{restroom.comment}</div>
        </div>
      );
    });
    // restroomComponent = <div>{restroomList[0].name}</div>;
  } else {
    restroomComponent = 'Waiting for search results';
  }

  return <div className="locations-container">{restroomComponent}</div>;
};

export default RestroomList;
