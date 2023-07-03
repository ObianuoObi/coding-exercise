const axios = require('axios'); // npm install axios

const API_URL = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today';

// Generate 100 random lat/lng points
const points = Array.from({ length: 100 }, () => ({
    lat: Math.random() * 180 - 90,
    lng: Math.random() * 360 - 180,
}));


// Group the points into batches of 5 for concurrent requests

const batches = points.reduce((acc, cur, i) => { // acc = accumulator, cur = current value, i = index
    if (i % 5 === 0) acc.push([]);
    acc[acc.length - 1].push(cur);
    return acc;
  }, []); 


 
