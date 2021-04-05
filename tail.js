const assertEqual = require('./assertEqual')

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

const words = ["Hello", "Lighthouse", "Labs"];

tail(words);

module.exports = tail;
