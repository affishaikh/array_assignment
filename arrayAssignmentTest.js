const assert = require('assert');
const {findEvenNumbers,findOddNumbers, sumOfNumbers,selectEverySecondElement}= require("./arrayAssignmentLib.js");
const {greatestNumberFromList, reverse, unique}= require("./arrayAssignmentLib.js");
const {mapElementsLength, countOddNumbers, countEvenNumbers, countNumbersAboveThreshold, countNumbersBelowThreshold}= require("./arrayAssignmentLib.js");
const findEvenNumbersTest = function() {
  assert.deepEqual(findEvenNumbers([]), []); 
  assert.deepEqual(findEvenNumbers([1]), []); 
  assert.deepEqual(findEvenNumbers([2]), [2]); 
  assert.deepEqual(findEvenNumbers([1,2]), [2]); 
  assert.deepEqual(findEvenNumbers([11, 13, 14]), [14]); 
}

const findOddNumbersTest = function() {
  assert.deepEqual(findOddNumbers([]), []); 
  assert.deepEqual(findOddNumbers([1]), [1]); 
  assert.deepEqual(findOddNumbers([2]), []); 
  assert.deepEqual(findOddNumbers([1,2]), [1]); 
  assert.deepEqual(findOddNumbers([11, 13, 14]), [11, 13]); 
}

const sumOfNumbersTest = function() {
  assert.equal(sumOfNumbers([]), 0);
  assert.equal(sumOfNumbers([1]), 1);
  assert.equal(sumOfNumbers([1,2]), 3);
  assert.equal(sumOfNumbers([10, 20, 30]), 60);
}

const selectEverySecondElementTest = function() {
  assert.deepEqual(selectEverySecondElement([1]), [1]);
  assert.deepEqual(selectEverySecondElement([1, 2]), [1]);
  assert.deepEqual(selectEverySecondElement([1, 2, 3]), [1, 3]);
  assert.deepEqual(selectEverySecondElement([1, 2, 3, "aftab", "shaikh"]), [1, 3, 'shaikh']);
}

const greatestNumberFromListTest = function() {
  assert.deepEqual(greatestNumberFromList([1]), 1);
  assert.deepEqual(greatestNumberFromList([1, 45, 13]), 45);
  assert.deepEqual(greatestNumberFromList([1, 45, 13, 90, 98, 1001]), 1001);
}


const mapElementsLengthTest = function() {
  assert.deepEqual(mapElementsLength(["a"]), [1]);
  assert.deepEqual(mapElementsLength(["aftab"]), [5]);
  assert.deepEqual(mapElementsLength(["aftab","shaikh","cksharma","dheeraj"]), [5,6,8,7]);
}

const countOddNumbersTest = function() {
  assert.equal(countOddNumbers([1,2]), 1);
  assert.equal(countOddNumbers([1,2, 3, 4, 5, 6]), 3);
  assert.equal(countOddNumbers([2,2, 3, 5]), 2);
  assert.equal(countOddNumbers([2,2]), 0);
}

const countEvenNumbersTest = function() {
  assert.equal(countEvenNumbers([1,2]), 1);
  assert.equal(countEvenNumbers([1,2, 3, 4, 5, 6]), 3);
  assert.equal(countEvenNumbers([2,2, 3, 5]), 2);
  assert.equal(countEvenNumbers([2,2]), 2);
}

const countNumbersAboveThresholdTest = function() {
  assert.equal(countNumbersAboveThreshold([], 1),0);
  assert.equal(countNumbersAboveThreshold([1], 1), 0);
  assert.equal(countNumbersAboveThreshold([1, 2], 1), 1);
  assert.equal(countNumbersAboveThreshold([10, 23, 11], 10), 2);
  assert.equal(countNumbersAboveThreshold([1, 2, 30, 40,33], 5), 3);
}

const countNumbersBelowThresholdTest = function() {
  assert.equal(countNumbersBelowThreshold([], 1),0);
  assert.equal(countNumbersBelowThreshold([1], 1), 0);
  assert.equal(countNumbersBelowThreshold([1, 2], 2), 1);
  assert.equal(countNumbersBelowThreshold([10, 23, 11], 15), 2);
  assert.equal(countNumbersBelowThreshold([1, 2, 30, 40,33], 5), 2);
}

const reverseTest = function() {
  assert.deepEqual(reverse([]),[]);
  assert.deepEqual(reverse([1]), [1]);
  assert.deepEqual(reverse([1, 2]), [2, 1]);
  assert.deepEqual(reverse(["Aftab", "Shubham"]), ["Shubham", "Aftab"]);
}


const uniqueTest = function() {
  assert.deepEqual(unique([]),[]);
  assert.deepEqual(unique([1]), [1]);
  assert.deepEqual(unique([1, 2]), [2, 1]);
  assert.deepEqual(unique(["Aftab", "Shubham"]), ["Shubham", "Aftab"]);
  assert.deepEqual(unique(["Aftab", "Shubham","Aftab"]), ["Shubham", "Aftab"]);
}
findEvenNumbersTest();
findOddNumbersTest();
sumOfNumbersTest();
selectEverySecondElementTest();
greatestNumberFromListTest();
mapElementsLengthTest();
countOddNumbersTest();
countEvenNumbersTest();
countNumbersAboveThresholdTest();
countNumbersBelowThresholdTest();
reverseTest();
uniqueTest();
