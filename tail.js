const tailMaker = function(arr) {
  const tail = arr.slice(1);
  return tail;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

let result = tailMaker(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tailMaker([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 1);
assertEqual(result[1], 3);