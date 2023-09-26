const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`✅Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};
// declare function and create 2 container variables for the objects in questions
const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // check if the array of keys are the same length, fail if they aren't
  if (keys1.length !== keys2.length) return false;
  // iterate through the keys
  for (const key of keys1) {
    //checks if the current key is present in the second object
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) return false;
    // check if the value of the current key is the same in both objects
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      if (!eqObjects(obj1[key], obj2[key])) return false;
    } else {
      // if the data type is primative, compare directly
      if (obj1[key] !== obj2[key]) return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long"};
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);