const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
    it("returns true for ([1, 2, 3], [1, 2, 3])", () => {
      assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    });

    it("returns false for ([1, 2, 3], [3, 2, 1])",() => {
        assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
    });
})
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should be true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should be false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should be true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should be false

