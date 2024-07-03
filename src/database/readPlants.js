const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

let results = []; // Define the variable in the outer scope

const plantData = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.resolve(__dirname, './usda-plants.csv'))
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

const getPlantData = async () => {
  try {
    results = await plantData(); // Fetch and store the data into the outer variable
    // console.log(results);
  } catch (error) {
    console.error('Error:', error);
  }
};

getPlantData();

// Now 'results' can be accessed later
// For example:
setTimeout(() => {
  //   console.log(results[0]);
  for (const el of results) {
    if (el['characteristics/0/Palatable Human'] === 'Yes') {
    }
    console.log(el['CommonName']);
    // console.log(el['Synonyms/0/PlantLocationId']);
  }
}, 5000);
