const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};


const tail = function(values) {
    
  if (values.length > 1) {
    return values.slice(1);
  } else {
    return values;
  }
};
assertEqual(tail([5,6,7]).toString(), [6,7].toString());
assertEqual(tail([1,2,5,8,0,8]).toString(), [2,5,8,0,4].toString());
