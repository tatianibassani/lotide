const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello'); 
  });
});

// const head = require('../head');
// const assertEqual = require('../assertEqual');
 
//  assertEqual(head([5,6,7]), 5);
//  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//  assertEqual(head([1,3,4]), 5);