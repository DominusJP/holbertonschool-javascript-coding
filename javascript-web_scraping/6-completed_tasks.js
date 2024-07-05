#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const tasks = JSON.parse(body);
  const completedTasks = {};
  tasks.forEach((task) => {
    if (task.completed) {
      completedTasks[task.userId] = (completedTasks[task.userId] || 0) + 1;
    }
  });
  console.log(completedTasks);
});
