#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, '', (err, res, body) => {
  if (err) {
    console.error(err);
  }

  const films = JSON.parse(body).results;
  const amount = films.filter(film => film.characters.includes('https://swapi-api.hbtn.io/api/people/18/'));
  console.log(amount.length);
});
