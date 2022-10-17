const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const tail = function (values) {
  if (values.length > 1) {
    return values.slice(1);
  } else {
    return values;
  }
};

/*const tail = arr => (arr.lenght > 1 ? arr.slice(1) : arr);*/
 
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result.toString(), ["Lighthouse", "Labs"].toString());

/* Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

 Test Case 2: ...
 ...*/