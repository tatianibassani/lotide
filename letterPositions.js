function eqArrays(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // Return false if elements at the same index are not equal
    }
  }

  return true; 
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1}  === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1}  !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for(let i = 0; i < sentence.length; i++){
    let letter = sentence[i];
    if (results[letter] === undefined) {
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }

  }
  return results;
};

const result = letterPositions("lighthouse in the house");
assertArraysEqual(result, {l:0, i:1, g:3, h:[4, 6], t:5, o:7, u:8, s:9, e:10 });

//console.log(letterPositions("hello"));
console.log(result);