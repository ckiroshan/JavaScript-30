// Contains list of cities in JSON format
const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// Empty array to store the list
const cities = [];

// Fetch data from json file
fetch(endpoint) // Returns a promise
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// filters array based on keyword searched
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

// Modifies population values with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Displays this list on HTML
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>`;
    })
    .join("");
  suggestions.innerHTML = html;
}
