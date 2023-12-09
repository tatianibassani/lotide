const assert = require('chai').assert;
const tail   = require('../tail');

// assertEqual(tail([5,6,7]).toString(), [6,7].toString());
// assertEqual(tail([1,2,5,8,0,8]).toString(), [2,5,8,0,4].toString());

describe("#tail", () => {
    it("returns [6, 7] for [5,6,7]", () => {
      assert.strictEqual(tail([5,6,7]).toString(), [6, 7].toString());
    });
  
    it("returns [2, 5, 8, 0, 8] for [1,2,5,8,0,8]", () => {
      assert.strictEqual(tail([1,2,5,8,0,8]).toString(), [2, 5, 8, 0, 8].toString()); 
    });
  });