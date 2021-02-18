/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Ararys - Evaluation
// -------------------------------------------------------------------------------------------------------

const arr1 = ['a', 'b', 'a', 'c', 'd'];

// Array evaluation
// typeof will incorrectly retrun object, better use instandeOf or isArray
console.log(typeof arr1);           // object
console.log(arr1 instanceof Array); // true
console.log(Array.isArray(arr1));   // true
