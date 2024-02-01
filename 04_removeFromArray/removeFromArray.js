const removeFromArray = function (arr, ...numArr) {
  numArr.map((num) => {
    let currentIndex = arr.indexOf(num);
    if (currentIndex >= 0) arr.splice(currentIndex, 1);
  });
  return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 3));

// Do not edit below this line
module.exports = removeFromArray;
