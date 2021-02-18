/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// String - Extracting
// -------------------------------------------------------------------------------------------------------

const str = 'Apple, Banana, Kiwi';

// slice() extracts and returns a part of a string
// slice(start, end(not included)) can be negative values
const extractedString1 = str.slice(7, 13);
console.log(extractedString1);    // Banana

const extractedStringToEnd = str.slice(7);
console.log(extractedStringToEnd);    // Banana, Kiwi

console.log('--------------------------------------------');

// substr() extracts and returns a part of a string
// substr(start, length)
const extractedString2 = str.substr(7, 6);
console.log(extractedString2);    // Banana
