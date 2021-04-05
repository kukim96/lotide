const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const actual = eqArrays([1, 2, 3]);
const expected = [1, 2, 3]

describe("#eqArrays", () => {
  it("actual is equal to expected", () => {
    const actual = eqArrays([1, 2, 3]);
    const expected = [1, 2, 3]
    assert.strictEqual(actual, expected, true);
  })
})

//assertEqual(actual, expected, true);

