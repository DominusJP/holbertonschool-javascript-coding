#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const args = process.argv;

request.get(`${args[2]}`, '', (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(args[3], body, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
