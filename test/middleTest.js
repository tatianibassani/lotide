const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [4, 6] for [7, 3, 4, 6, 2, 1]", () => {
    assert.strictEqual(middle([7, 3, 4, 6, 2, 1]),[4, 6]);
  });

  it("returns [4] for [7, 3, 4, 6, 2]", () => {
    assert.strictEqual(middle([7, 3, 4, 6, 2]),[4]);
  });

 
});