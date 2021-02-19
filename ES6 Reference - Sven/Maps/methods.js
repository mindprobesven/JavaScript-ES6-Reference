/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Maps - Methods
// -------------------------------------------------------------------------------------------------------

const map1 = new Map([
  ['Sven', 40],
  ['Barbara', 35],
  ['Valentina', 2],
]);

// set() add a new key value pair to a Map or modify an existing one
map1.set('Sven', 50);
console.log(map1);  // Map(3) { 'Sven' => 50, 'Barbara' => 35, 'Valentina' => 2 }

// get() Retrieve data
console.log(map1.get('Valentina'));   // 2

// has() returns true if key exists in Map
console.log(map1.has('Sven'));  // true

// delete() remove element from a Map
map1.delete('Sven');
console.log(map1);  // Map(2) { 'Barbara' => 35, 'Valentina' => 2 }

// size - Returns size of a Map
console.log(map1.size); // 2

// clear() - Clears a map
map1.clear();
console.log(map1);  // Map(0) {}

console.log('--------------------------------------------');
