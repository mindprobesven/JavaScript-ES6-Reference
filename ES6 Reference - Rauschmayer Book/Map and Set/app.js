// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

// -------------------------------------------------------------------------------------------------------
// Maps
// -------------------------------------------------------------------------------------------------------

// Maps have key value pairs. Maps can have arbitray keys such as object, functions, etc.
const KEY1 = {}; // A key can be an object
const KEY2 = {};
const map = new Map().set(KEY1, 'Hello').set(KEY2, 'Sven');
console.log(map.get(KEY1) + ' : ' + map.get(KEY2)); // Returns Hello : Sven

const map2 = new Map([
  [1, 'a'],
  [2, 'b']
]);

console.log(map2.get(1) + ' : ' + map2.get(2)); // Returns a : b
console.log(map2.has(1)); // Returns true
map2.delete(1);
console.log(map2.has(1)); // Returns false
console.log(map2.size); // Returns 1
map2.clear();
console.log(map2.size); // Returns 0

// -------------------------------------------------------------------------------------------------------

// Iteration
const map3 = new Map([
  ['first', 'Sven'],
  ['last', 'Kohn']
]);

for(const key of map3.keys()) {
  console.log(key);
}

for(const value of map3.values()) {
  console.log(value);
}

for(const [key, value] of map3.entries()) {
  console.log(key + ' : ' + value);
}

console.log([...map3]); // Converts map to array
console.log([...map3.keys()]); // Returns array ["first", "last"]
console.log([...map3.values()]); // Returns array ["Sven", "Kohn"]

// -------------------------------------------------------------------------------------------------------

// Mapping and filtering maps

const map4 = new Map([
  [0, 'a'],
  [1, 'b'],
  [2, 'c']
]);

const changedMap = new Map(
  [...map4].map(([key, value]) => [key + 1, '_' + value])
);
console.log(changedMap); // Returns Map(3) {1 => "_a", 2 => "_b", 3 => "_c"}

const filteredMap = new Map(
  [...map4].filter(([key, value]) => key < 1)
);
console.log(filteredMap); // Returns {0 => "a"}

// -------------------------------------------------------------------------------------------------------

// Combining maps

const mapCombine1 = new Map([
  [1, 'a1'],
  [2, 'b1'],
  [3, 'c1']
]);

const mapCombine2 = new Map([
  [2, 'a2'],
  [3, 'b2'],
  [4, 'c2']
]);

const combinedMap = new Map([...mapCombine1, ...mapCombine2]);
console.log([...combinedMap]);
console.log(combinedMap); // Returns {1 => "a1", 2 => "a2", 3 => "b2", 4 => "c2"}

// -------------------------------------------------------------------------------------------------------
// WeakMaps
// -------------------------------------------------------------------------------------------------------

// WeakMaps are like Maps but the keys have to be objects
// You cannot get an overview of contents in a WeakMap or iterate through it
// You cannot clear a WeakMap

const wm = new WeakMap();
try {
  wm.set('abc', 123); // TypeError
}
catch(error) {
  console.log(error);
}
wm.set({}, 123); // OK

const wm1 = new WeakMap([
  [{}, 'a'],
  [{}, 'b'],
  [{}, 'c']
]);

try {
  for(const [key, value] of wm1) {
    console.log(key, value);
  }
}
catch(error) {
  console.log(error); // TypeError: wm1 is not iterable
}

// -------------------------------------------------------------------------------------------------------
// Set
// -------------------------------------------------------------------------------------------------------

// Set works with arbitray values
// A Set is a collection of UNIQUE elements

const set = new Set();
set.add('red');
console.log(set.size); // Returns 1
set.add('red');
console.log(set); // Returns 1 because red already exists


set.has('red'); // Returns true
set.delete('red'); 
set.has('red'); // Returns false
set.size;
set.clear();

const set2 = new Set(['red', 'green', 'yellow']);
console.log(set2); // Returns Set(3) {"red", "green", "yellow"}

for(const x of set2) {
  console.log(x);
}

console.log([...set2]); // Converts the set to an array ["red", "green", "yellow"]

const uniqueValues = new Set([1, 2, 6, 2, 1, 1, 4, 3]);
console.log([...uniqueValues]); // Returns array [1, 2, 6, 4, 3]
