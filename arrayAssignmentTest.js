const assert = require('assert');
const {findEvenNumbers,
  findOddNumbers,
  sumOfNumbers,
  selectEverySecondElement,
  greatestNumberFromList,
  reverse,
  unique,
  union,
  reverseFibonacci,
  findIndexOf,
  intersection,
  difference,
  isSubset,
  zip,
  partition,
  averageOfNumbers,
  sortAscendingOrder,
  sortDescendingOrder,
  mapElementsLength,
  countOddNumbers,
  countEvenNumbers,
  countNumbersAboveThreshold,
  countNumbersBelowThreshold,
  extractDigits,
  rotate,
  lowestNumberFromList}= require("./arrayAssignmentLib.js");

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

const lowestNumberFromListTest = function() {
  assert.deepEqual(lowestNumberFromList([1]), 1);
  assert.deepEqual(lowestNumberFromList([1, 45, 13]), 1);
  assert.deepEqual(lowestNumberFromList([1, 45, 13, 90, 98, 1001]), 1);
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
  assert.deepEqual(unique([1, 2]), [1, 2]);
  assert.deepEqual(unique(["Aftab", "Shubham"]), ["Aftab", "Shubham"]);
  assert.deepEqual(unique(["Aftab", "Shubham","Aftab"]), ["Aftab", "Shubham"]);
}

const unionTest = function() {
  assert.deepEqual(union([],[]),[]);
  assert.deepEqual(union([1],[1]), [1]);
  assert.deepEqual(union([1, 2], [2, 3]), [1, 2, 3]);
  assert.deepEqual(union(["Aftab", "Aftab","shaikh"], ["shaikh", 3]), ["Aftab", "shaikh", 3]);
}

const intersectionTest = function() {
  assert.deepEqual(intersection([],[]),[]);
  assert.deepEqual(intersection([1],[1]), [1]);
  assert.deepEqual(intersection([1, 2], [2, 3]), [2]);
  assert.deepEqual(intersection(["Aftab", "Aftab","shaikh"], ["shaikh", 3]), ["shaikh"]);
}

const differenceTest = function() {
  assert.deepEqual(difference([],[]),[]);
  assert.deepEqual(difference([1],[1]), []);
  assert.deepEqual(difference([1, 2], [2, 3]), [1]);
  assert.deepEqual(difference(["Aftab", "Aftab","shaikh"], ["shaikh", 3]), ["Aftab"]);
}

const isSubsetTest = function() {
  assert.deepEqual(isSubset([],[]),true);
  assert.deepEqual(isSubset([1],[1]), true);
  assert.deepEqual(isSubset([1, 2], [2, 3]), false);
  assert.deepEqual(isSubset(["Aftab", "Aftab","shaikh"], ["shaikh" ]), true);
}

const zipTest = function() {
  assert.deepEqual(zip([],[]),[]);
  assert.deepEqual(zip([1],[]),[]);
  assert.deepEqual(zip([],[1]),[]);
  assert.deepEqual(zip([1],[1]), [[1,1]]);
  assert.deepEqual(zip([1, 2], [2, 3]),[[1,2],[2,3]]);
  assert.deepEqual(zip([1, 2, 3], [4, 5, 6]),[[1,4],[2,5],[3,6]]);
  assert.deepEqual(zip([1, 2, 3], [4, 5 ]),[[1,4],[2,5]]);
  assert.deepEqual(zip(["Aftab", "Aftab","shaikh"], ["shaikh" ]), [["Aftab", "shaikh"]]);
}

/*const partitionTest = function() {
  assert.deepEqual(partition([],4),[[],[]]);
  assert.deepEqual(partition([1],4),[[1],[]]);
  assert.deepEqual(partition([5],4),[[5],[]]);
  assert.deepEqual(partition([10, 2, 4, 5, 60],4),[[2, 4],[10, 5, 60]]);
}*/

const reverseFibonacciTest = function() {
  assert.deepEqual(reverseFibonacci(1),[0]);
  assert.deepEqual(reverseFibonacci(2),[1, 0]);
  assert.deepEqual(reverseFibonacci(4),[2,1,1, 0]);
  assert.deepEqual(reverseFibonacci(8),[13,8,5,3,2,1,1, 0]);
}

const averageOfNumbersTest = function() {
  assert.equal(averageOfNumbers([10, 20, 30]),20);
  assert.equal(averageOfNumbers([2]),2);
}

const findIndexOfTest = function() {
  assert.equal(findIndexOf([10, 20, 30],20), 1);
  assert.equal(findIndexOf([2],2), 0);
  assert.equal(findIndexOf([1, 10, 30],2), -1);
  assert.equal(findIndexOf([],2), -1);
}

const sortAscendingOrderTest = function() {
  assert.deepEqual(sortAscendingOrder([6, 8, 1, 56, 3]), [1,3,6,8,56]);
  assert.deepEqual(sortAscendingOrder([]), []);
  assert.deepEqual(sortAscendingOrder([1]), [1]);
  assert.deepEqual(sortAscendingOrder([1,1]), [1,1]);
  assert.deepEqual(sortAscendingOrder([1,1, -1, -2]), [-2, -1, 1, 1]);
}

const sortDescendingOrderTest = function() {
  assert.deepEqual(sortDescendingOrder([6, 8, 1, 56, 3]), [56, 8, 6, 3, 1]);
  assert.deepEqual(sortDescendingOrder([]), []);
  assert.deepEqual(sortDescendingOrder([1]), [1]);
  assert.deepEqual(sortDescendingOrder([1,1]), [1,1]);
  assert.deepEqual(sortDescendingOrder([1,1, -1, -2]), [1, 1, -1, -2]);
}

const extractDigitsTest = function() {
  assert.deepEqual(extractDigits(1234), [1, 2, 3, 4]);
  assert.deepEqual(extractDigits(1), [1]);
}

const rotateTest = function() {
  assert.deepEqual(rotate([1,2,3,4,5],3), [4,5,1,2,3]);
  assert.deepEqual(rotate([1,2,3,4,5],2), [3,4,5,1,2]);
}

findEvenNumbersTest();
findOddNumbersTest();
sumOfNumbersTest();
selectEverySecondElementTest();
greatestNumberFromListTest();
lowestNumberFromListTest();
mapElementsLengthTest();
countOddNumbersTest();
countEvenNumbersTest();
countNumbersAboveThresholdTest();
countNumbersBelowThresholdTest();
reverseTest();
uniqueTest();
unionTest();
intersectionTest();
differenceTest();
isSubsetTest();
zipTest();
//partitionTest();
reverseFibonacciTest();
averageOfNumbersTest();
findIndexOfTest();
sortAscendingOrderTest();
sortDescendingOrderTest();
extractDigitsTest();
rotateTest();
