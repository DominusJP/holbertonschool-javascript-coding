#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const characterId = 18;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  const results = JSON.parse(body).results;
  const characters = results.map(result => result.characters);
  const listOfCharacter = characters.flat();
  const countWedge = listOfCharacter.filter(characterUrl => {
    return characterUrl.includes(`/${characterId}/`);
  });
  console.log(countWedge.length);
});
