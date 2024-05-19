// Contains list of cities in JSON format
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// Empty array to store the list
const cities = [];

// Fetch data from json file
fetch(endpoint) // Returns a promise
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

