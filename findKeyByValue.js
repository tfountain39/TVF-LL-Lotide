const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj)
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "Star Trek: TOS",
  comedy: "Friends",
  drama: "Kaguya Sama: Love is War"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Kaguya Sama: Love is War"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");