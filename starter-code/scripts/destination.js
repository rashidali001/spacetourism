import data from '../data.json' assert {type: 'json'};

const destination = data.destinations //an array of objects

console.log(destination[0].name);