exports.findOddNumbers = function(listOfNumbers) {
  let result = [];
  for(number of listOfNumbers) {
    let isOdd = (number % 2 == 1);
    if(isOdd) {
      result = result.concat(number);
    }
  }
  return result;
}

exports.findEvenNumbers = function(listOfNumbers) {
  let result = [];
  for(number of listOfNumbers) {
    let isEven = (number % 2 == 0);
    if(isEven) {
      result = result.concat(number);
    }
  }
  return result;
}

exports.sumOfNumbers = function(listOfNumbers) {
  let sum = 0;
  for(number of listOfNumbers) {
    sum = sum + number;
  }
  return sum;
}

exports.selectEverySecondElement = function(listOfNumbers) {
  let result = [];
  for(let index = 0; index < listOfNumbers.length; index = index + 2) {
    result.push(listOfNumbers[index]);
  }
  return result;
}
