const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  //iterar sobre o objeto itemsToCount
  //pra cada atributo do objeto, faca:
  //  - se for true
  //     - itera sobre o array, contando o numero de vezes que encontrou 
  //     - adiciona no objeto resultado

  let result = {};
  for (const item in itemsToCount) {
    if (itemsToCount[item]) {
      let itemCounter = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === item) {
          itemCounter++;
        }
      }
      if (itemCounter > 0) {
        var temp = { [item]: itemCounter };
        result = Object.assign(result, temp);
      }
    }
  }
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
