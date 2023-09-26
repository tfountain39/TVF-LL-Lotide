const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays(["Lighthouse Labs", true], ["Bootcamp", true]), false);
assertEqual(eqArrays([1,2], [1,3]), false);
assertEqual(eqArrays(["Darth Vader", "r2d2"], ["Darth Vader", "r2d2"]), true);
assertEqual(eqArrays([1, 1239847324], [1, 1239847324]), true);