const assertObjectEqual = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = areObject(val1) && areObject(val2);
    if (
      areObjects && !assertObjectEqual(val1, val2)  ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }
  return true;
}

const johnDoe1 = {
  name: "John Doe",
  address: {
    street: '123 Main Street',
    city: 'Hobbiton',
    zipCode: '12345'
  },
  hobbies: ['reading', 'cycling', 'gaming']
};

const johnDoe2 = {
  name: "John Doe",
  address: {
    street: '123 Main Street',
    city: 'Hobbiton',
    zipCode: '12345'
  },
  hobbies: ['reading', 'cycling', 'gaming']
};


console.log(assertObjectEqual(johnDoe1, johnDoe2))



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
