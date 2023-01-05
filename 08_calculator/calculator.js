const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(array) {
	let finalSum = 0;
  for (value of array) {
    finalSum += value;
  }
  return finalSum;
};

const multiply = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(firstNum, secondNum) {
	return firstNum ** secondNum;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    for (let i = number - 1; i >= 1; i--) {
      number *= i;
    }
  }
  return number;
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
