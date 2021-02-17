/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Ararys - Sorting
// -------------------------------------------------------------------------------------------------------

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Sort by string alphabetically
console.log(fruits.sort());

// Reverses the sort order
console.log(fruits.reverse());

console.log('--------------------------------------------');

const points = [40, 100, 1, 5, 25, 10];

// Numeric sort ascending
console.log(points.sort((a, b) => a - b));

// Numeric sort descending
console.log(points.sort((a, b) => b - a));

console.log('--------------------------------------------');

// Find highest numeric value
console.log(Math.max(...points));

// Find lowest numeric value
console.log(Math.min(...points));

console.log('--------------------------------------------');

// Sorting arrays containing objects
const cars = [
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
];

// Sort object by numeric value
console.log(cars.sort((a, b) => a.year - b.year));

// Sort by string properties
const sortedObjectArray = cars.sort((a, b) => {
  const x = a.type.toLowerCase();
  const y = b.type.toLowerCase();
  if (x < y) { return -1; }
  if (x > y) { return 1; }
  return 0;
});

console.log(sortedObjectArray);
