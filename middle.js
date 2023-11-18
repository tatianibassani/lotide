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
}
  /*if (arr.length <= 2) {
    return result;
  }

  let midElement = Math.floor(arr.length / 2);
  for(let i = 0; i < arr.length; i++){
    if (i === midElement) {
      if (arr.length % 2 === 0) {
        result.push(arr[i-1]);
        result.push(arr[i]);  
      } else {
        result.push(arr[i]);
      }
    }
  }

  return result;
}*/

assertArraysEqual(middle([7, 3, 4, 6, 2, 1]), [4, 6]);
assertArraysEqual(middle([7, 3, 4, 6, 2]), [4]);

