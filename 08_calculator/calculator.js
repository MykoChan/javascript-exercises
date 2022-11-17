const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	// result = 0;
  // for (let x of array) {
  //   result += x;
  // }
  // return result;
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.length ? array.reduce((total, current) => total * current, 1) : 0;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
  product = 1;
  for (let i = num; i > 1; i--) {
    product *= i;
  }
  return product;
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
