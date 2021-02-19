/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Maps - Creating
// -------------------------------------------------------------------------------------------------------

// A Map can be created via an iterable of key-value pairs (Arrays with 2 elements)
// Any value can be a key, even an object
const map1 = new Map([
  ['Sven', 40],
  ['Barbara', 35],
  ['Valentina', 2],
]);

const map2 = new Map().set(0, 'Sven').set(1, 'Barbara');

console.log(map1);  // Map(2) { 0 => 'Sven', 1 => 'Barbara' }
console.log(map2);

console.log('--------------------------------------------');
