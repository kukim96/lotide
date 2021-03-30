
const without = function(source, itemsToRemove) {
  let answerArray = source.filter((element) => {
    if (itemsToRemove.includes(element)) {
      return false;
    } else {
      return true;
    }
  });
  return answerArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ['lighthouse']));