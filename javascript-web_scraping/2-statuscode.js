#!/usr/bin/node
const request = require('request');

// Check if URL is provided as argument
if (process.argv.length < 3) {
  console.error('Usage: node get_status.js <URL>');
  process.exit(1);
}

// Get URL from command line arguments
const url = process.argv[2];

// Make a GET request to the URL
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
