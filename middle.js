// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArrayEqual');

const middle = function(arr) {
  let result = [];

  if (arr.length <= 2) {
    return result;
  }

  let midElement = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    result.push(arr[midElement-1]);
    result.push(arr[midElement]);  
  } else {
    result.push(arr[midElement]);
  }

  return result;
};

module.exports = middle;
