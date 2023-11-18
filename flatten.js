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


 //0  1    2      3   4
 //[1, 2, [3, 4], 5, [6]]

 //result = [1, 2, 3, 4, 5, 6]
const flatten = function(values) {
  let flattened = [];
  for (let i = 0; i < values.length; i++) {
    if (Array.isArray(values[i])) {
      let innerArray = values[i]; //[3, 4]
      for (let j =0; j < innerArray.length; j++) {
        flattened.push(innerArray[j]);
      }
    } else {
      flattened.push(values[i]);
    }
  }
  return flattened;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

/*
-----------other way-------
if (Array.isArray(values[i])) {
  flattened = flattened.concat(values[i]);
} else {
  flattened.push(values[i]);
}
*/