const add = function(num1,num2) {
	return num1 + num2

};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(numbers) {
	return numbers.reduce((acc, current) => acc + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, current) => acc * current, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
  if (num < 0) return "Input must be a non-negative integer";  
  if (num === 0 || num === 1) return 1;  
  
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;  
  }
  
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
