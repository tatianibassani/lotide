const assertEqual = require('../assertEqual');
const eqArrays = require('../assertEqual');

assertEqual(eqArrays([1,2,3], [4,5,6]), false);
assertEqual(eqArrays([1,2,3], [1,2,3]), true);