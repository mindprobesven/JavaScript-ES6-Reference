/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// String - Searching
// -------------------------------------------------------------------------------------------------------

const str = "Please locate where 'locate' occurs!";

// indexOf() returns the  index position of the first occurance
// indexOf(element, start(optional))
const foundAtIndex = str.indexOf('locate');
console.log(foundAtIndex);    // 7

// lastIndexOf() returns the index position of the last occurance
// lastIndexOf(element, start(optional))
const foundAtLastIndex = str.lastIndexOf('locate');
console.log(foundAtLastIndex);    // 21

console.log('--------------------------------------------');

// search() returns the index position of the first occurance
// search(element(can be RegEx))
const foundAt = str.search('locate');
console.log(foundAt);    // 7

console.log('--------------------------------------------');

// includes() returns true if a string contains the search characters
const wasfound = str.includes('locate');
console.log(wasfound);    // true

console.log('--------------------------------------------');

// match() returns the matches as an Array
const matchesArray = str.match(/locate/gi);
console.log(matchesArray);    // [ 'locate', 'locate' ]

console.log('--------------------------------------------');

// startsWith() checks if a strings starts with search item
const startsWith = str.startsWith('Please');
console.log(startsWith);    // true

// endsWith() checks if a strings ends with search item
const endsWith = str.endsWith('occurs!');
console.log(endsWith);    // true

console.log('-'.repeat(50));
