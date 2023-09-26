const isObject = val => typeof val === 'object' && val !== null;

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, i) => 
    Array.isArray(val) ? eqArrays(val, arr2[i]) :
    isObject(val) ? assertObjectEqual(val, arr2[i]) :
    val === arr2[i]
  );
};

const assertObjectEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    return (
      isObject(val1) ? assertObjectEqual(val1, val2) :
      Array.isArray(val1) ? eqArrays(val1, val2) :
      val1 === val2
    );
  });
};

const johnDoe1 = {
  // ... same as before
};

const johnDoe2 = {
  // ... same as before
};

console.log(assertObjectEqual(johnDoe1, johnDoe2)); // Should log true