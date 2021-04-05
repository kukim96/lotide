const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

//assertArraysEqual(["I", "Love", "Coding"], ["I", "Love", "Coding"]);
//assertArraysEqual(["I", "Love", "Soccer"], ["I", "Love", "Baseball"]);

describe("#assertArraysEqual", () => {
  it("arry 1 = array 2", () => {
    assert.strictEqual(assertArraysEqual(["I", "Love", "Coding"], ["I", "Love", "Coding"]))
    assert.strictEqual(assertArraysEqual(["I", "Love", "Soccer"], ["I", "Love", "Baseball"]));
  });
});