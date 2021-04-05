const middle = function(arr1) {
  let output = [];
  let middleIndex = 0;

  if (arr1.length <= 2) {
    return output;
  } else {
    if (arr1.length % 2 === 0) {
      middleIndex = (arr1.length / 2) - 1;
      output.push(arr1[middleIndex]);
      middleIndex = (arr1.length / 2);
      output.push(arr1[middleIndex]);
      return output;
    } else {
      middleIndex = Math.ceil((arr1.length / 2) - 1);
      output.push(arr1[middleIndex]);
      return output;
    }
  }
};

(middle([1]));
(middle([1, 2]));
(middle([1, 2, 3]));
(middle([1, 2, 3, 4, 5]));
(middle([1, 2, 3, 4]));
(middle([1, 2, 3, 4, 5, 6]));


module.exports = middle;
