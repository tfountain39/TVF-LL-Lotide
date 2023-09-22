const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    return true;
  }
};

assertEqual(eqArrays(["Lighthouse Labs", true], ["Bootcamp", true]));
assertEqual(eqArrays([1,2], [1,3]));
assertEqual(eqArrays(["Darth Vader", "r2d2"], ["Darth Vader", "r2d2"]));
assertEqual(eqArrays([1, 1239847324], [1, 1239847324]));