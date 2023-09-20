const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Darth Vader", "Darth Vader");
assertEqual(1, 1239847324);