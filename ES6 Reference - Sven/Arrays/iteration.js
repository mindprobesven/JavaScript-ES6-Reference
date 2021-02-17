/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Ararys - Iteration
// -------------------------------------------------------------------------------------------------------

const num1 = [45, 4, 9, 16, 25];

// map() creates a new array by performing a function on each array element.
const mulitplyArray = num1.map((x, index) => x * 2);
console.log(mulitplyArray);   // [ 90, 8, 18, 32, 50 ]

console.log('--------------------------------------------');

// The filter() method creates a new array with array elements that passes a test.
const filteredArray = num1.filter((x, index) => x >= 10);
console.log(filteredArray);   // [ 45, 16, 25 ]

console.log('--------------------------------------------');

// reduce() can reduce the array to a single value
const reducedArray = num1.reduce((total, x, index) => total + x);
console.log(reducedArray);   // 99

console.log('--------------------------------------------');

// every() checks if all array values pass a test
const everyResult = num1.every((x, index) => x > 5);
console.log(everyResult);   // false

console.log('--------------------------------------------');

// some() checks if some array values pass a test
const someResult = num1.some((x, index) => x > 5);
console.log(someResult);   // true
