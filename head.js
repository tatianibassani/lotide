const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
//   }
// };

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual(2, 2);

const head = function(values){
  return values[0];
};
 assertEqual(head([5,6,7]), 5);
 assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 assertEqual(head([1,3,4]), 5);

module.exports = head;