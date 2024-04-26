#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const completed = {};
    const json = JSON.parse(body);
    for (const task of json) {
      if (task.completed === true) {
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } else {
          completed[task.userId] += 1;
        }
      }
    }
    console.log(completed);
  }
});
