const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([7, 3, 4, 6, 2, 1]), [4, 6]);
assertArraysEqual(middle([7, 3, 4, 6, 2]), [4]);