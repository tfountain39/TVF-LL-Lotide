
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(array1, array2) {
  const arrayAreEqual = eqArrays(array1, array2);
  arrayAreEqual
    ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
    : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
};

const map = function(array, callback) {
  const length = [];
  for (let item of array) {
    length.push(callback(item));
  }
  return length;
};

const words = ["ground", "control", "to", "major", "tom"];

const length = map(words, word => word[0]);

console.log(length);

assertArrayEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArrayEqual(map([1, 2, 3], num => num * 2), [2, 4, 6]);
assertArrayEqual(map([true, false, true], bool => !bool), [false, true, false]);