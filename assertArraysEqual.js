const eqArrays = function (arr1, arr2){
  if (arr1.toString() === arr2.toString()) {
    return true;
  }
  return false;
  
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

/*
--------better way to do it------
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
}
*/ 