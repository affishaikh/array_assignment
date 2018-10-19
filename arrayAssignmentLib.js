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

exports.lowestNumberFromList = function(listOfNumbers) {
  let result = listOfNumbers[0];
  for(number of listOfNumbers) {
    if(result>number){
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
