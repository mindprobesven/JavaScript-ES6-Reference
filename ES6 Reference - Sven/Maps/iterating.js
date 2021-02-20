/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Maps - Iterating
// -------------------------------------------------------------------------------------------------------

const map1 = new Map([
  ['Sven', 40],
  ['Barbara', 35],
  ['Valentina', 2],
]);

// foreach()
map1.forEach((value, key) => {
  console.log(key, value);
});

// keys()
[...map1.keys()].forEach((key) => {
  console.log(key);
});

// values()
[...map1.values()].forEach((value) => {
  console.log(value);
});

// entries()
[...map1.entries()].forEach((entry) => {
  console.log(entry[0], entry[1]);
});

console.log('--------------------------------------------');
