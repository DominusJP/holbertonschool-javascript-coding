#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const stringy = process.argv[3];

fs.writeFile(filePath, stringy, (error) => {
  if (error) {
    console.error(error);
  }
});
