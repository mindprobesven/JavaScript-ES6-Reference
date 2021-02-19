/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// String - Merging
// -------------------------------------------------------------------------------------------------------

const str1 = 'Hello';
const str2 = 'World';

// concat() joins two or more strings
const joinedString1 = str1.concat(str2);
console.log(joinedString1);    // HelloWorld

// Using + operator
const joinedString2 = str1 + str2;
console.log(joinedString2);   // HelloWorld

// Using template literal
const joinedString3 = `${str1} ${str2}`;
console.log(joinedString3);   // Hello World

// Using spread operator
const joinedString4 = [...str1, ...str2].join('');
console.log(joinedString4);   // HelloWorld

console.log('--------------------------------------------');
