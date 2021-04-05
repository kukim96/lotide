const assertEqual = require('./assertEqual');

const head = function(assertEqual) {
  return assertEqual[0];
};

assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");
assertEqual(head([1, 2]), 1);
assertEqual([1, 2, 3]);