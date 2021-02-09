// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

/*
Array.from
Array.from(arrayLike, mapFunc?, thisArg?)

Convert two kinds of values to arrays or convert an array-like object to an array.
Array-like values have a property length and indexed elements
*/

const arrayLike = {
  length: 2,
  0: 'a',
  1: 'b'
};

try {
  for(const x of arrayLike) {
    console.log(x); // Throws an error because arrayLike is not iterable
  }
}
catch (error) {
  console.log(error);
}

const arr = Array.from(arrayLike);
console.log(arr);

for(const x of arr) {
  console.log(x); // Works
}

// -------------------------------------------------------------------------------------------------------

const spans = document.querySelectorAll('span');
console.log(spans); // An array-like object

// Here we pass two parameters to Array.from; The Array-like object and a map funcion
const spanContentTexts = Array.from(spans, y => y.textContent);
console.log(spanContentTexts); // Returns the textContent in the spans as array ["A", "B", "C"]

// -------------------------------------------------------------------------------------------------------

// Iterating over Arrays
console.log(Array.from(['a', 'b'].keys()));
console.log(Array.from(['a', 'b'].entries()));
console.log(...['a', 'b'].entries());

// -------------------------------------------------------------------------------------------------------

// Searching for Array elements
console.log([6, -5, 8].find(x => x < 0)); // Returns -5
console.log([6, 5, 8].find(x => x < 0)); // Returns undefined

console.log([6, -5, 8].findIndex(x => x < 0)); // Returns 1
console.log([6, 5, 8].findIndex(x => x < 0)); // Returns -1

// -------------------------------------------------------------------------------------------------------

// Copy elemets within an array
const array = [0, 1, 2, 3];
// Syntax Array.prototype.copyWithin(target index, start index, end = this.length)
array.copyWithin(2, 0, 2);
console.log(array); // Returns [0, 1, 0, 1]

// -------------------------------------------------------------------------------------------------------

// Fill an array
const arr1 = ['a', 'b', 'c'];
arr1.fill(7);
console.log(arr1); // Returns [7,7,7]

// Syntax Array.prototype.fill(value, start index, end = this.length)
console.log(['a', 'b', 'c'].fill(7, 1 ,2)); // returns ['a', 7, 'c']