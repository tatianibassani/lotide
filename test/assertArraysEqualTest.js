const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [4,5,6], false);
assertArraysEqual([1,2,3], [1,2,3], true);