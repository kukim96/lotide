const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual(2, 3);

describe("#assertEqual", () => {
  it("Lighthouse Labs is not equal toBootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("1 is equal to 1", () => {
    assert.strictEqual(assertEqual(1, 1));
  });

  it("2 is not equal to 3", () => {
    assert.strictEqual(assertEqual(2, 3));
  });
});