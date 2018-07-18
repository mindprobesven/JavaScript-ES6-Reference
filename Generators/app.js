// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

// Generators are pieces of code that can be paused and resumed

function* genFunc() {
  console.log('First');
  yield 'a'; // This pauses
  console.log('Second');
  return 'result'; // An explicit return is optional
}

// When you call a generator function you get a generator object that controls the process
const genObj = genFunc();

const result1 = genObj.next(); // Output: First
console.log(result1); // {value: "a", done: false}
const result2 = genObj.next(); // Output: Second
console.log(result2); // {value: "result", done: true}

// Iterating over a generator
function* genFunc2() {
  yield 'a';
  yield 'b';
  yield 'c';
}

for(const x of genFunc2()) {
  console.log(x); // Returns a,b,c
}

const arr = [...genFunc2()];
console.log(arr); // Returns array ["a", "b", "c"]

const [x, y, z] = genFunc2();
console.log(x, y, z); // Returns a b c