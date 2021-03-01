/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Arrays - Searching
// -------------------------------------------------------------------------------------------------------

const num1 = [45, 4, 9, 16, 25];

// map() creates a new array by performing a function on each array element.
const mulitplyArray = num1.map((x, index) => x * 2);
console.log(mulitplyArray);   // [ 90, 8, 18, 32, 50 ]

console.log('--------------------------------------------');

// includes() returns true of the array contains the element
// includes(element, start(optional))
const arr2 = ['a', 'b', 'a', 'c', 'd'];

const includesResult = arr2.includes('c');
console.log(includesResult);    // true

console.log('--------------------------------------------');

// filter() method creates a new array with array elements that passes a test.
const filteredArray = num1.filter((x, index) => x >= 10);
console.log(filteredArray);   // [ 45, 16, 25 ]

// find() returns the value of the first array element that passes a test
const foundItem = num1.find((x, index) => x > 18);
console.log(foundItem);   // 45, the first item found greater than 18

// findIndex() returns the index of the first array element that passes a test
const foundItemAtIndex = num1.findIndex((x, index) => x < 10);
console.log(foundItemAtIndex);   // 0

console.log('--------------------------------------------');

// reduce() can reduce the array to a single value
const reducedArray = num1.reduce((total, x, index) => total + x);
console.log(reducedArray);   // 99

console.log('--------------------------------------------');

// every() checks if all array values pass a test
const everyResult = num1.every((x, index) => x > 5);
console.log(everyResult);   // false

// some() checks if some array values pass a test
const someResult = num1.some((x, index) => x > 5);
console.log(someResult);   // true

console.log('--------------------------------------------');

// indexOf() returns first index position of found item or -1 if not found
// indexOf(item, start(optional))
const arr1 = ['a', 'b', 'a', 'c', 'd'];

const indexPos = arr1.indexOf('a');
console.log(indexPos);   // 0

// lastIndexOf() returns last occurance position of found item or -1 if not found
// lastIndexOf(item, start(optional))
const lastIndexPos = arr1.lastIndexOf('a');
console.log(lastIndexPos);   // 2
