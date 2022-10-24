const eqArrays = function (arr1, arr2) {
  // return arr1.toString() === arr2.toString();
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
}

//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

//[7, 3, 4, 6, 2, 1]
//midElement = 3

//[7, 3, 4, 6, 2]
//midElement = 2


const middle = function(arr) {
  let result = [];

  if (arr.length <= 2) {
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
}

//assertArraysEqual(middle([7, 3, 4, 6, 2, 1]), [4, 6]);
//assertArraysEqual(middle([7, 3, 4, 6, 2]), [4]);

module.exports = middle;