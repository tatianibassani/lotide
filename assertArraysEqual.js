function eqArrays(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Return false if elements at the same index are not equal
    }
  }

  return true; 
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

module.exports = assertEqual;

/*
--------better way to do it------
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
}
*/ 