const perenual_api_key = process.env['PERENUAL_API_KEY'];
fetch(`https://perenual.com/api/species-list?key=${perenual_api_key}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Perenual received:', data);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
