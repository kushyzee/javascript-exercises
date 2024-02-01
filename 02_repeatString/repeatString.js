const repeatString = function (string, number) {
  if (number < 0) return "ERROR";
  let repeatedString = "";
  for (let i = 0; i < number; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
