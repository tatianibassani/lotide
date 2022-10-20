const eqArrays = function (arr1, arr2) {
  // return arr1.toString() === arr2.toString();
   if (arr1.toString() === arr2.toString()) {
     return true;
   }
   return false;
 };

const eqObjects = function(object1, object2){
  if (Object.keys(object1).length != Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
         return false; 
      }
    } else {
      if (!object1[key] === object2[key]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}  !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({a:1}, {a:2});