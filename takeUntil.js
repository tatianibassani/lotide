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

const takeUntil = function(array, callback){ 
  const result = [];

  for (let element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      return result;
    }
  }

  return result;
}
//console.log(takeUntil);
//const values = map(words, (value) => value.length);
//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);