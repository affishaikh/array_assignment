const isOdd = function(num) {
  let result = false;
  if(num%2) result = true;
  return result;
}

const isEven = function(num) {
  let result = false;
  if(!(num%2)) result = true;
  return result;
}

const addition = function(sum, element) {
  return sum+element;
}

const isSecondElement = function(element, index) {
  let result = false;
  if(!(index%2)) {
    result =  true;
  }
  return result;
}

const greatestNumberFinder = function(greaterNumber, element) {
  if(element > greaterNumber) greaterNumber = element;
  return greaterNumber;
}

const lowestNumberFinder = function(lowestNumber, element) {
  if(element < lowestNumber) lowestNumber = element;
  return lowestNumber;
}

const oddNumbersCounter = function(result, element) {
  if(element%2) result++;
  return result;
}

const evenNumbersCounter = function(result, element) {
  if(!(element%2)) result++;
  return result;
}

const createAboveNumberCounter = function(threshold) {
  return function(result, element) {
  if(element > threshold) result++;
  return result;
  }
}

const createBelowNumberCounter = function(threshold) {
  return function(result, element) {
  if(element < threshold) result++;
  return result;
  }
}

const reverser  = function(result, element) {
  result.unshift(element);
  return result;
}

const uniqueFinder = function(result, element) {
  if(!result.includes(element)) result.push(element);
  return result;
}

const createIntersectionFinder= function(listOfElements2) {
  return function(result, element) {
    let isIncluded = listOfElements2.includes(element); 
    if(isIncluded) {
      result.push(element);
    }
    return result;
  }
}
exports.findOddNumbers = function(listOfNumbers) {
  let result = [];
  result = listOfNumbers.filter(isOdd);
  return result;
}

exports.findEvenNumbers = function(listOfNumbers) {
  let result = [];
  result = listOfNumbers.filter(isEven);
  return result;
}

exports.sumOfNumbers = function(listOfNumbers) {
  let sum = 0;
  if(!listOfNumbers.length) {return 0;}
  sum = listOfNumbers.reduce(addition);
  return sum;
}

exports.selectEverySecondElement = function(listOfNumbers) {
  let result = [];
  result = listOfNumbers.filter(isSecondElement);
  return result;
}

exports.greatestNumberFromList = function(listOfNumbers) {
  let result = 0;
  result = listOfNumbers.reduce(greatestNumberFinder);
  return result;
}

exports.lowestNumberFromList = function(listOfNumbers) {
  let result = 0;
  result = listOfNumbers.reduce(lowestNumberFinder);
  return result;
}

exports.mapElementsLength = function(listOfElements) {
  let result = [];
  result = listOfElements.map(element => element.length)
  return result;
}

exports.countOddNumbers = function(listOfNumbers) {
  let result = 0;
  result = listOfNumbers.reduce(oddNumbersCounter,0);
  return result;
}

exports.countEvenNumbers = function(listOfNumbers) {
  let result = 0;
  result = listOfNumbers.reduce(evenNumbersCounter,0);
  return result;
}

exports.countNumbersAboveThreshold = function(listOfNumbers, threshold) {
  let result = 0;
  let numberCounter = createAboveNumberCounter(threshold);
  result = listOfNumbers.reduce(numberCounter, 0);
  return result;
}

exports.countNumbersBelowThreshold = function(listOfNumbers, threshold) {
  let result = 0;
  let numberCounter = createBelowNumberCounter(threshold);
  result = listOfNumbers.reduce(numberCounter, 0);
  return result;
}

exports.reverse = function(list) {
  result = list.reduce(reverser, [])
  return result;
}

exports.findUnique = function(listOfElements) {
  let result = listOfElements.reduce(uniqueFinder, []);
  return result;
}

exports.union = function(listOfElements1, listOfElements2) {
  let result = exports.findUnique(listOfElements1.concat(listOfElements2));
  return result;
}

exports.intersection = function(listOfElements1, listOfElements2) {
  let uniqueList1 = exports.findUnique(listOfElements1);
  let intersectionFinder = createIntersectionFinder(listOfElements2);
  let result = listOfElements1.reduce(intersectionFinder,[]);
  return result;
}

exports.difference = function(listOfElements1, listOfElements2) {
  let uniqueElementsOfList1 = exports.findUnique(listOfElements1);
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

exports.zip = function(listOfElements1, listOfElements2) {
  let result = [];
  let lengthOfList1 = listOfElements1.length;
  let lengthOfList2= listOfElements2.length;
  let smallestArrayLength = (lengthOfList1>lengthOfList2) ? lengthOfList2 : lengthOfList1;
  for(let index = 0; index < smallestArrayLength; index++) {
    result.push([listOfElements1[index], listOfElements2[index]]);
  }
  return result;
}

exports.partition = function(listOfNumbers, threshold) {
  let numbersAboveThreshold = [];
  let numbersBelowThreshold = [];
  if(!listOfNumbers.length) {
    return -1;
  }
  for(number of listOfNumbers) {
    if(number <= threshold) {
      numbersBelowThreshold.push(number);
    } else {
      numbersAboveThreshold.push(number);
    }
  }
  if(!numbersBelowThreshold.length) {
    return numbersAboveThreshold;
  }
  if(!numbersAboveThreshold.length) {
    return numbersBelowThreshold;
  }
  return [numbersBelowThreshold, numbersAboveThreshold];
}

exports.reverseFibonacci = function(limit) {
  let num1 = -1;
  let num2 = 1;
  let result = [];
  for(let index = 0; index < limit; index++) {
    let numberToBePushed = num1 + num2;
    num1 = num2;
    num2 = numberToBePushed;
    result.push(numberToBePushed);
  }
  result = exports.reverse(result);
  return result;
}

exports.averageOfNumbers = function(listOfNumbers) {
  let result = 0;
  for(number of listOfNumbers) {
    result = result + number;
  }
  result = result/listOfNumbers.length;
  return result;
}

exports.findIndexOf = function(listOfNumbers, requiredNumber) {
  let result = -1;
  for(let index = 0; index < listOfNumbers.length && result == -1; index++) {
    if(listOfNumbers[index] == requiredNumber) {
      result = index; 
    }
  }
  return result;
}

exports.sortAscendingOrder = function(listOfNumbers) {
  for(let row = 0; row < listOfNumbers.length-1; row++) {
    for(let column = row+1; column < listOfNumbers.length; column++) {
      if(listOfNumbers[row] > listOfNumbers[column]) {
        temporarySwapVar = listOfNumbers[row];
        listOfNumbers[row] = listOfNumbers[column];
        listOfNumbers[column] = temporarySwapVar;
      }
    }
  }
  return listOfNumbers;
}

exports.sortDescendingOrder = function(listOfNumbers) {
  for(let row = 0; row < listOfNumbers.length-1; row++) {
    for(let column = row+1; column < listOfNumbers.length; column++) {
      if(listOfNumbers[row] < listOfNumbers[column]) {
        temporarySwapVar = listOfNumbers[row];
        listOfNumbers[row] = listOfNumbers[column];
        listOfNumbers[column] = temporarySwapVar;
      }
    }
  }
  return listOfNumbers;
}

exports.extractDigits = function(givenNumber) {
  let result = [];
  let givenNumberStr = givenNumber.toString();
  for(digit of givenNumberStr) {
    result.push(+digit);
  }
  return result;
}

exports.rotate = function(listOfElements, referenceElement) {
  let result = [];
  let referenceElementIndex = exports.findIndexOf(listOfElements,referenceElement);
  for(let index = referenceElementIndex+1; index < listOfElements.length; index++) {
    result.push(listOfElements[index]);
  }
  for(let index = 0; index <= referenceElementIndex; index++) {
    result.push(listOfElements[index]);
  }
  return result;
}
