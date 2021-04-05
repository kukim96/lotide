const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Hello", "Lighthouse", "Labs"];

//tail(words);

describe("#tail", () => {
  it(undefined, () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words));
  })
})