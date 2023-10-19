const tail = require('../tail');
const assert = require('chai');

let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tail([1, 2, 3]);
assertEqual(result.length, 2);
assertEqual(result[0], 1);
assertEqual(result[1], 3);

describe("#tail", () => {
  it("returns ['2', '3'] for ['1', '2', '3']", () => {
    assert.deepEqual(tail(['1', '2', '3']), ['2', '3']);
  });
});