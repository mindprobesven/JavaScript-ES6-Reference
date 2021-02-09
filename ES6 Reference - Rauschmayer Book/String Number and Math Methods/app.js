// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

// String methods
let text  = 'My name is Sven Kohn and I love Javascript';

console.log(text.startsWith('My')); // Returns true
console.log(text.startsWith('Sven')); // Returns false
console.log(text.endsWith('Javascript')); // Returns true
console.log(text.includes('Sven Kohn')); // Returns true
console.log(text.repeat(3)); // Returns text three times

// Number methods
console.log(Number.isFinite(2)); // Returns true
console.log(Number.isFinite(Infinity)); // Returns false
console.log(Number.isFinite(NaN)); // Returns false
console.log(Number.isNaN(NaN)); // Returns true
console.log(Number.isNaN('String')); // Returns false
console.log(Number.isInteger(2)); // Returns true
console.log(Number.isInteger(2.5)); // Returns false
console.log(Number.parseInt('325')); // Returns integer 325
console.log(Number.parseFloat('325.50')); // Returns number with decimal fraction 325.5

// Math methods
console.log(Math.sign(-3)); // Returns -1
console.log(Math.sign(0)); // Returns 0
console.log(Math.sign(3)); // Returns 1

console.log(Math.trunc(3.25)); // Removes the decimal fraction and returns 3