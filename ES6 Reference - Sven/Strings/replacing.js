/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// String - Replacing
// -------------------------------------------------------------------------------------------------------

const str = 'Apple, Banana, Kiwi, Banana';

// replace() replaces matches and returns new string

// Replacing one match case sensitive
const newString1 = str.replace('Banana', 'Cherry');
console.log(newString1);

// Replacing one match case insensitive using RegEx flag /i
const newString2 = str.replace(/BANANA/i, 'Cherry');
console.log(newString2);

// Replacing all matches case insensitive using RegEx flags /gi
const newString3 = str.replace(/BANANA/gi, 'Cherry');
console.log(newString3);

console.log('--------------------------------------------');
