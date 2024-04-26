#!/usr/bin/node
const request = require('request');

// Check if movie ID is provided as argument
if (process.argv.length < 3) {
  console.error('Usage: node get_movie_title.js <movie_id>');
  process.exit(1);
}

// Get movie ID from command line arguments
const movieId = process.argv[2];

// Construct the URL with movie ID
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch movie details. Status code: ${response.statusCode}`);
    return;
  }

  try {
    const movieData = JSON.parse(body);
    console.log(`Title: ${movieData.title}`);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});
