#!/usr/bin/node

const request = require('request');
const args = process.argv;
const URL = 'https://swapi-api.hbtn.io/api/films/';

request.get(URL + `${args[2]}`, '', (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const film = JSON.parse(body);
    console.log(film.title);
  }
});
