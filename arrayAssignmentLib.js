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

exports.greatestNumberFromList = function(listOfNumbers) {
  let result = 0;
  for(number of listOfNumbers) {
    if(result<number){
      result = number;
    }
  }
  return result;
}

exports.mapElementsLength = function(listOfElements) {
  let result = [];
  for(element of listOfElements) {
    result.push(element.length); 
  }
  return result;
}

exports.countOddNumbers = function(listOfNumbers) {
  let oddNumbersArray = exports.findOddNumbers(listOfNumbers);
  return oddNumbersArray.length;
}

exports.countEvenNumbers = function(listOfNumbers) {
  let evenNumbersArray = exports.findEvenNumbers(listOfNumbers);
  return evenNumbersArray.length;
}

