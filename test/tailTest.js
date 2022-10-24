const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.toString(), ["Lighthouse", "Labs"].toString());
  });
});