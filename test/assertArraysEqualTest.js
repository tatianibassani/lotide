
const eqArrays = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1,2,3], [4,5,6]), false);
assertArraysEqual(eqArrays([1,2,3], [1,2,3]), true);