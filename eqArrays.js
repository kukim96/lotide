const assertEqual = require("./assertEqual");

const eqArrays = function(actual, expected) {
  let output = true;
  if (actual.length !== expected.length) {
    output = false;
  }  
  for (let element = 0; element < actual.length; element ++) {
    if (actual[element] !== expected[element]) {
    }
  }
  return output;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

module.exports = eqArrays;
