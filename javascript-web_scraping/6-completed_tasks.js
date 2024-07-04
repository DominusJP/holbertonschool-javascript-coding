#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
    return;
  }

  let tasks;
  try {
    tasks = JSON.parse(body);
  } catch (e) {
    console.error('Failed to parse response body:', e);
    return;
  }

  const completedTasks = {};

  tasks.forEach((task) => {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 0;
      }
      completedTasks[task.userId]++;
    }
  });

  console.log(completedTasks);
});
