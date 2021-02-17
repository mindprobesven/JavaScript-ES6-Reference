/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Ararys - Methods
// -------------------------------------------------------------------------------------------------------

const arr1 = ['a', 'b', 'a', 'c', 'd'];
const arr2 = ['x', 'y', 'z'];

// Array evaluation
// typeof will incorrectly retrun object, better use instandeOf or isArray
console.log(typeof arr1);           // object
console.log(arr1 instanceof Array); // true
console.log(Array.isArray(arr1));   // true

console.log('--------------------------------------------');

// Converting arrays to strings
console.log(arr1.toString());
console.log(arr1.join(', '));

console.log('--------------------------------------------');

// Combining arrays
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

console.log('--------------------------------------------');

// Add new element to the end
arr1.push('e');
console.log(arr1.toString());

// Remove last element
arr1.pop();
console.log(arr1.toString());

// Remove first element
arr1.shift();
console.log(arr1.toString());

// Add new element to the beginning
arr1.unshift('a');
console.log(arr1.toString());

console.log('--------------------------------------------');

// Splice removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// .splice(startAtIndex, deleteCount, itemsToAdd (optional))
const deletedElements = arr1.splice(2, 1, 'z');
console.log(arr1.toString());   // a,b,z,c,d
console.log(deletedElements);   // [ 'a' ]

console.log('--------------------------------------------');

const arr3 = ['a', 'b', 'a', 'c', 'd'];

// Slices out a piece of an array into a new array
// .slice(startAtIndex, upTo (but not including))
let newArraySlice = arr3.slice(2);

const arr4 = ['a', 'b', 'a', 'c', 'd'];
newArraySlice = arr4.slice(1, 3);
console.log(newArraySlice);   // [ 'b', 'a' ]
