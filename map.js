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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const values = map(words, (value) => value.length);
assertArraysEqual(values, [6, 7, 2, 5, 3]);

//const map = function() {
  //const results = [];
  //return results;
//}



//const map = function() {
  // empty for now :)
//}


/*const results1 = map(words, word => word[0]);
console.log(results1);*/

module.exports = map;