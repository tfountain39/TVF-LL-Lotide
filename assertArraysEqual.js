const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  const arraysAreEqual = eqArrays(array1, array2);
  arraysAreEqual
    ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
    : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};

module.exports = assertArraysEqual;