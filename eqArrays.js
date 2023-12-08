const assertEqual = require('./assertEqual');

function eqArrays(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; 
    }
  }

  return true; 
}
/*const eqArrays = function (arr1, arr2){
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  return false;
  
};*/


module.exports = eqArrays;