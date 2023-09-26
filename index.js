const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertEqualObjects = require('./assertEqualObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head   = require('./head');
const map = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

console.log('head:', head);
console.log('tail:', tail);
console.log('middle:', middle);

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqualObjects: assertEqualObjects,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  takeUntil: takeUntil,
  without: without
};