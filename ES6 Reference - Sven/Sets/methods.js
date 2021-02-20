/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Sets - Methods
// -------------------------------------------------------------------------------------------------------

const set1 = new Set(['red', 'green', 'yellow']);

// has() returns true if element exists in Set
console.log(set1.has('green'));  // true

// delete() remove element from a Set
set1.delete('green');
console.log(set1);  // Set(2) { 'red', 'yellow' }

// size - Returns size of a Set
console.log(set1.size); // 2

// clear() - Clears a Set
set1.clear();
console.log(set1);  // Set(0) {}

console.log('--------------------------------------------');

const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

// Union
const union = new Set([...a, ...b]);
console.log([...union]);    // [ 1, 2, 3, 4 ]

// Intersection
const intersection = new Set([...a].filter((x) => b.has(x)));
console.log([...intersection]);   // [ 2, 3 ]

// Difference
const difference = new Set([...a].filter((x) => !b.has(x)));
console.log([...difference]);   // [ 1 ]
