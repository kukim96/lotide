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

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));
