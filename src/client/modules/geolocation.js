// NOT USING THIS. TODO: Figure out how to get this to return latitude & longitude

const geolocate = {
  options: {
    enableHighAccuracy: true,
  },

  async success(position) {
    const latitude = await position.coords.latitude;
    const longitude = await position.coords.longitude;
    return { latitude, longitude };
    // setLatitude(latitude);
    // setLongitude(longitude);
  },

  async getLatLong() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        geolocate.success,
        geolocate.error,
        geolocate.options
      );
    } else {
      console.log('Geolocation not supported');
    }
  },

  error() {
    console.log('Unable to retrieve your location');
  },
};

export default geolocate;
