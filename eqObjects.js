const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
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

// const eqObjects = function(object1, object2) {
//   for (const key in object1) {
//     for (const key in object2) {
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//   }

  

//   return true;
// };

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false