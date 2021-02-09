// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

// If the last thing a function does is to call another function, this is a tail call
function id(x) {
  return x;
}

function f(a) {
  const b = a + 1;
  return id(b); // This is a tail call
}

console.log(f(2));

// -------------------------------------------------------------------------------------------------------

// Tail recursive functions
function factorial1(x) {
  if(x <= 0) {
    return 1;
  }
  else {
    console.log('+ ' + (x - 1));
    // This is not tail recursive because it must hold a stack frame for each call
    return x * factorial1(x - 1);
  }
}
console.log(factorial1(4));


function factorial(n) {
  return facRec(n, 1);
}

function facRec(x, acc) {
  if(x <= 1) {
    return acc;
  }
  else {
    return facRec(x - 1, x * acc); // This is a tail recursive function
  }
}

console.log(factorial(4));

// -------------------------------------------------------------------------------------------------------

//  Tail recursive loops
function forEach(arr, callback, start = 0) {
  if (0 <= start && start < arr.length) {
      callback(arr[start], start);
      return forEach(arr, callback, start + 1); // Tail recursive call
  }
}

forEach(['a', 'b'], (elem, i) => console.log(`${i}. ${elem}`));

function findIndex(arr, predicate, start = 0) {
  if(0 <= start && start < arr.length) {
    if(predicate(arr[start])) {
      return start;
    }
    else {
      return findIndex(arr, predicate, start + 1); // Tail recursive call
    }
  }
}

console.log(findIndex(['a', 'b'], x => x === 'b')); // Returns 1