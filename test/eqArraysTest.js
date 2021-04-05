const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const actual = eqArrays([1, 2, 3]);
const expected = [1, 2, 3]

assertEqual(actual, expected, true);

