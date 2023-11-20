const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countLetters = function(phrase) {
  const results = {};

for (const letter of phrase) {
  if (results[letter]) {
    results[letter] += 1;
  } else {
    results[letter] = 1;
  }
}
  return results;
};




const result = countLetters("hello world");


assertEqual(result['h'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 3);
assertEqual(result['o'], 2);
assertEqual(result['w'], 1);
assertEqual(result['r'], 1);
assertEqual(result['d'], 1);
