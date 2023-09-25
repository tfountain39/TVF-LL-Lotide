const assertObjectEqual = function(object1, object2) {
  if (object1.length !== object2.length) {
    return false;
  }
  for (let i = 0; i < object.length; i++) {
    if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;
}

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArrayEqual = function(array1, array2) {
//   const arrayAreEqual = eqArrays(array1, array2);
//   arrayAreEqual
//     ? console.log(`✅Assertion Passed: ${array1} and ${array2} are equal`)
//     : console.log(`🛑Assertion Failed: ${array1} and ${array2} are not equal`);
// };

assertArrayEqual([1, 2, 3], [1 , 2, 4]);