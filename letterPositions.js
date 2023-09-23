
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


const letterPositions = function(sentence) {
  const results = {};
  const lowercasedSentence = sentence.toLowerCase();
  const splitSentence = lowercasedSentence.split('');

  for (let i = 0; i < sentence.length; i++) {
    const letter = splitSentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

const result = letterPositions("Todd")

assertArrayEqual(result['T'], [0]);
assertArrayEqual(result['o'], [1]);
assertArrayEqual(result['d'], [2,3]);

const lowercasedSentence = sentence.toLowerCase();
const splitSentence = lowercasedSentence.split('');
const results = {};