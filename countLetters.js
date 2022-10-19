const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countLetters = function(word){
  let result = {};
  for(let value of word){
    if (result[value] === undefined) {
      result = Object.assign(result, {[value]:1});
    } else {
      result[value] = result[value] + 1;
    }
  }
  return result;
}

console.log(countLetters("LHL"));