const findKeyByValue = function(findObject, searchKey) {
  for (const key of Object.keys(findObject)) {
    if(findObject[key] === searchKey) {
      return key;
    }
  }
};

//test assertions
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);