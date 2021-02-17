/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Numbers - Methods
// -------------------------------------------------------------------------------------------------------

const num1 = 5;
const num2 = 5.45;
const num3 = '???';
const num4 = NaN;

console.log(Number.isInteger(num1));  // true
console.log(Number.isInteger(num2));  // false
console.log(Number.isInteger(num3));  // false
console.log(Number.isInteger(num4));  // false

console.log('--------------------------------------------');

// Number.isNaN doesn't coerce its argument to a number and is safer for non-numbers
console.log(Number.isNaN(num1));  // false
console.log(Number.isNaN(num2));  // false
console.log(Number.isNaN(num3));  // false
console.log(Number.isNaN(num4));  // true

console.log('--------------------------------------------');

// Parsing a string to an integer or float
const num5 = '5.45';

console.log(Number.parseInt(num5, 10)); // 5
console.log(parseInt(num5, 10));        // 5

console.log(Number.parseFloat(num5));   // 5.45
console.log(parseFloat(num5));          // 5.45

console.log('--------------------------------------------');

// Checking if a number is positive or negative
const num6 = 10;
const num7 = -10;

console.log(Math.sign(num6));   // 1
console.log(Math.sign(num7));   // -1

console.log('--------------------------------------------');

const num8 = 5.456;

// Removes the decimal fraction
console.log(Math.trunc(num8));  // 5

// Rounds a number downwards to its nearest integer
console.log(Math.floor(num8));  // 5

// Rounds a number upwards to its neares integer
console.log(Math.ceil(num8));   // 6

// Rounds a number to nearest integer
console.log(Math.round(num8));  // 5

console.log('--------------------------------------------');

// Converting numbers to strings
const num9 = 5.456;

// Returns a number as string
console.log(num9.toString());   // '5.456'

// Returns number as string with a specified number of decimals
console.log(num8.toFixed(2));   // '5.46'

// Returns number as string with a specified total length
console.log(num8.toPrecision(2));   // '5.46'
