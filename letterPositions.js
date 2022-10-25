const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
  // return arr1.toString() === arr2.toString();
   if (arr1.toString() === arr2.toString()) {
     return true;
   }
   return false;
 };

const letterPositions = function (sentence){
  let results = {};
  for (let i = 0; i < sentence.length; i ++){
    const character = sentence[i];
    if (results[character] === undefined) {
       results = Object.assign(results, {[character] : [i]});
    } else {
       results[character].push(i);
    }
  }
  console.log('results: ' + JSON.stringify(results));
  return results;
};

//{h: [0], e:[1], l:[2,3], o:[4]}
assertArraysEqual(letterPositions("hello"), {h:[0], e:[1], l:[2,3], o:[4]});
//assertArraysEqual(letterPositions("lighthouse in the house").e, [1]);

module.exports = letterPositions;