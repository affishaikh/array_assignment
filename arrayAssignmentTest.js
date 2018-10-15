const assert = require('assert');
const {findEvenNumbers,findOddNumbers, sumOfNumbers}= require("./arrayAssignment.lib.js");

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
findEvenNumbersTest();
findOddNumbersTest();
sumOfNumbersTest();
