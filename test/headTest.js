const assertEqual = require('../assertEqual')
const head = require('../head')

assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");
assertEqual(head([1, 2]), 1);
assertEqual(head([1, 2, 3]));