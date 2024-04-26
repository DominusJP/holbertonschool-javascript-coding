#!/usr/bin/node

const request = require('request');
const args = process.argv;

request.get(args[2], '', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`code: ${data.statusCode}`);
  }
});
