const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

//module.exports = assertEqual;
module.exports = assertArraysEqual;

/*
--------better way to do it------
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
}
*/ 