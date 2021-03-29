const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(assertEqual) {
  return assertEqual[0];
};

assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Lighthouse Labs");
assertEqual(head([1, 2]), 1);
assertEqual([1, 2, 3]);