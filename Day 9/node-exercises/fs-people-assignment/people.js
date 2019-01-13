const fs = require('fs');

const peoplenames = (filename) => JSON.parse(fs.readFileSync(filename)).people;

var people = peoplenames('people.json');
var people2 = peoplenames('people2.json');
var sorted = people.concat(people2).sort()
fs.writeFile("peopleComplete.txt", sorted, (err) => err ? console.log(err) : console.log("Finished"))