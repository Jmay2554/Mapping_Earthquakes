// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.80883990511805, -96.7017263723088], 4);
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
  [37.63681006626681, -122.40010263593486],
  [30.19770290398845, -97.66639581871483],
  [43.68180710391181, -79.62368546021195],
  [40.641400830853634, -73.7781383030217]
];
// Get data from cities.js

// Loop through the cities array and create one marker for each city.
// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  dashArray:"4",
  weight:"4",
  opacity:".5"
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,

});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);