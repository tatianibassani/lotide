const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const findKey = function(obj, test){
  for (const element in obj) {
    if (obj[element] === test) {
      return element;
    }
  }
  return undefined; 
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}

assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);

assertEqual(findKey(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, "That '70s Show"), undefined);