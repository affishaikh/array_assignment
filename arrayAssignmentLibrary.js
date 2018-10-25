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

const createDifferenceFinder= function(listOfElements2) {
  return function(result, element) {
    let isIncluded = listOfElements2.includes(element); 
    if(!isIncluded) {
      result.push(element);
    }
    return result;
  }
}

const createIsSubsetChecker = function(listOfElements1) {
  return function(element) {
    result = listOfElements1.includes(element);
    return result;
  }
}

const createZipper = function(largestArray, index) {
  return function(element) {
    let returnValue=[element,largestArray[index]];
    index++;
    return returnValue;
  }
}

const createPartitionCreator = function(threshold) {
  return function(result, element) {
    let index = 1;
    if(element <= threshold) {
      index = 0;
    }
    result[index].push(element);
    return result;
  }
}

const createFibonacciFinder = function(num1, num2) {
  return function(element) {
    let numberInFibonacciSeries = num1 + num2;
    num1 = num2;
    num2 = numberInFibonacciSeries;
    return numberInFibonacciSeries;
  }
}

const createAverageOfNumbersCalculator = function(numberOfElements) {
  return function(result, element) {
    result = result + element/numberOfElements;
    return result;
  }
}

const createIndexFinder = function(requiredNumber) {
  return function(result, element) {
    if(element === requiredNumber && result.requiredIndex === -1) {
      result.requiredIndex = result.index;
    }
    result.index++;
    return result;
  }
}

const isAscendingOrderChecker = function(result, number) {
  if(!(result.prevNumber <= number) && result.isAscending) {
    result.isAscending = false;
  }
  result.prevNumber = number;
  return result;
}

const isDescendingOrderChecker = function(result, number) {
  if(!(result.prevNumber >= number) && result.isDescending) {
    result.isDescending = false;
  }
  result.prevNumber = number;
  return result;
}

const createDigitsExtracter = function(givenNumberStr, index) {
  return function(element) {
    return givenNumberStr[index++];
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
  let result = uniqueList1.reduce(intersectionFinder,[]);
  return result;
}

exports.difference = function(listOfElements1, listOfElements2) {
  let uniqueList1 = exports.findUnique(listOfElements1);
  let differenceFinder = createDifferenceFinder(listOfElements2);
  let result = uniqueList1.reduce(differenceFinder,[]);
  return result;
}

exports.isSubset = function(listOfElements1, listOfElements2) {
  let isSubsetChecker = createIsSubsetChecker(listOfElements1);
  let result = listOfElements2.every(isSubsetChecker);
  return result;
}

exports.zip = function(listOfElements1, listOfElements2) {
  let result = [];
  let lengthOfList1 = listOfElements1.length;
  let lengthOfList2= listOfElements2.length;
  let smallestArray = listOfElements1;
  let largestArray = listOfElements2;
  if(lengthOfList1>lengthOfList2) {
    smallestArray = listOfElements2;
    largestArray = listOfElements1;
  }
  let zipper = createZipper(largestArray, 0);
  result = smallestArray.map(zipper);
  return result;
}

exports.partition = function(listOfNumbers, threshold) {
  let partitionCreator = createPartitionCreator(threshold);
  let initialPartiton = [];
  initialPartiton[0] = [];
  initialPartiton[1] = [];
  let result = listOfNumbers.reduce(partitionCreator,initialPartiton);
  return result;
}

exports.reverseFibonacci = function(limit) {
  let num1 = -1;
  let num2 = 1;
  let fibonacciFinder = createFibonacciFinder(num1, num2);
  let result = new Array(limit).fill(0).map(fibonacciFinder);
  result = exports.reverse(result);
  return result;
}

exports.averageOfNumbers = function(listOfNumbers) {
  let averageOfNumbersCalculator = createAverageOfNumbersCalculator(listOfNumbers.length); 
  let result = listOfNumbers.reduce(averageOfNumbersCalculator,0);
  return result;
}

exports.findIndexOf = function(listOfNumbers, requiredNumber) {
  let indexFinder = createIndexFinder(requiredNumber);
  let result = listOfNumbers.reduce(indexFinder, {index : 0, requiredIndex : -1}).requiredIndex;
  return result;
}

exports.isAscendingOrder = function(listOfNumbers) {
  let result = listOfNumbers.reduce(isAscendingOrderChecker, {isAscending : true, prevNumber : 0}).isAscending;
  return result;
}

exports.isDescendingOrder = function(listOfNumbers) {
  let result = listOfNumbers.reduce(isDescendingOrderChecker, {isDescending : true, prevNumber : listOfNumbers[0]}).isDescending;
  return result;
}

exports.extractDigits = function(givenNumber) {
  if(givenNumber === undefined) {return [];}
  let givenNumberStr = givenNumber.toString();
  let result = new Array(givenNumberStr.length).fill(0);
  let digitsExtracter = createDigitsExtracter(givenNumberStr, 0);
  result = result.map(digitsExtracter);
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
