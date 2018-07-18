// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

const array = [...'abc'];
console.log(array); // Returns ['a', 'b', 'c']

// -------------------------------------------------------------------------------------------------------

const args1 = [1, 2, 3];
const args2 = [4, 5, 6];
const args3 = [7, 8, 9];

// Join two or more arrays using the spread operator 
let a = [...args1, ...args2, ...args3];
console.log(a);

// OLD WAY: Join two or more arrays using the old concat way
let b = args1.concat(args2, args3);
console.log(b);

// or

args1.push.apply(args1, args2);
console.log(args1);

// -------------------------------------------------------------------------------------------------------

// To place one array in front of the other
let c = [...args3, ...args2, ...args1];
console.log(c);

// OLD WAY: Using unshift.apply and args1 will change in the process
args1.unshift.apply(args1, args2);
args1.unshift.apply(args1, args3);
console.log(args1);