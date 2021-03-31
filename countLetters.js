const countLetters = function(string) {
  const results = {};
  for (const character of string) {
    if (character !== " ") {
      if (results[character]) {
        results[character] += 1;
      } else {
        results[character] = 1;
      }
    }
  }
  return results;
};

