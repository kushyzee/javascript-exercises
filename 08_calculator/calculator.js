const add = function(...numbers) {
  return numbers.reduce((acc, number) => acc + number, 0)
};

const subtract = function(...numbers) {
  return numbers.reduce((acc, number) => acc - number)
};

const sum = function(numArray) {
  return numArray.reduce((acc, number) => acc + number, 0)
};

const multiply = function(numArray) {
  return numArray.reduce((acc, number) => acc * number, 1)
};

const power = function(num, numPower) {
	let result = num;
  for(let i = 0; i <= numPower - 2; i++) {
    result = result * num
  }
  return result
};

const factorial = function(num) {
	if (num === 0 || num === 1) return 1;

  let result = 1
  for (let i = 1; i < num; i++) {
    result = result * (i + 1)
  }
  return result
};

const result = factorial(5)
console.log(result)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
