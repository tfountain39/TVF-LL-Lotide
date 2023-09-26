const tail = require('../tail');
const assertEqual = require('../assertEqual');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 1);
assertEqual(result[1], 3);