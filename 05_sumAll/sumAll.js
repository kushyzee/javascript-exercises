const sumAll = function(firstNum, secondNum) {
  if (typeof firstNum !== 'number' || typeof secondNum !== 'number' || firstNum < 0 || secondNum < 0) {
    return "ERROR"
  }

  sumTotal = 0
  if (firstNum < secondNum) {
    for (let i = firstNum; i <= secondNum; i++) {
      sumTotal += i;
    }
    return sumTotal;
  }

  else if (firstNum > secondNum) {
    for (let i = secondNum; i <= firstNum; i++) {
      sumTotal += i
    }
    return sumTotal
  }

};

let result = sumAll(4, '1');
console.log(result)
// Do not edit below this line
module.exports = sumAll;
