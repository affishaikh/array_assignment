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

exports.countNumbersAboveThreshold = function(listOfNumbers, threshold) {
  let result = 0;
  for(number of listOfNumbers) {
    if(number > threshold) {
      result++;
    }
  }
  return result;
}

exports.countNumbersBelowThreshold = function(listOfNumbers, threshold) {
  let result = 0;
  for(number of listOfNumbers) {
    if(number < threshold) {
      result++;
    }
  }
  return result;
}

exports.reverse = function(list) {
  let result = [];
  for(let index = list.length-1; index >= 0; index--) {
    result.push(list[index]);
  }
  return result;
}

exports.unique = function(listOfElements) {
  let result = [];
  for(element of listOfElements) {
    let isIncluded = result.includes(element)
    if(!isIncluded) {
    result.push(element);
    }
  }
  return result;
}

exports.union = function(listOfElements1, listOfElements2) {
  let result = exports.unique(listOfElements1.concat(listOfElements2));
  return result;
}

exports.intersection = function(listOfElements1, listOfElements2) {
  let result = [];
  for(element of listOfElements1) {
    let isIncluded = listOfElements2.includes(element); 
    if(isIncluded) {
      result.push(element);
    }
  }
  return result;
}

exports.difference = function(listOfElements1, listOfElements2) {
  let uniqueElementsOfList1 = exports.unique(listOfElements1);
  let result = [];
  for(element of uniqueElementsOfList1) {
    let isIncluded = listOfElements2.includes(element); 
    if(!isIncluded) {
      result.push(element);
    }
  }
  return result;
}

exports.isSubset = function(listOfElements1, listOfElements2) {
  let result = true;
  for(let index = 0; index < listOfElements2.length && result; index++) {
    let isIncluded = listOfElements1.includes(listOfElements2[index]);
    if(!isIncluded) {
      result = false;
    }
  }
  return result;
}
