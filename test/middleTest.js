const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//assertArraysEqual(middle([1]));
//assertArraysEqual(middle([1, 2]));
//assertArraysEqual(middle([1, 2, 3]));
//assertArraysEqual(middle([1, 2, 3, 4, 5]));
//assertArraysEqual(middle([1, 2, 3, 4]));
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));

describe("#middle", () => {
  it("middle of array consisting '1,2,3,4,5,6' is '3' and '4'", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6])));
  });
});