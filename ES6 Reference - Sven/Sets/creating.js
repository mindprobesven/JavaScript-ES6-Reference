/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Sets - Creating
// -------------------------------------------------------------------------------------------------------

// A Set can be created via an iterable (for example an Array)

const set1 = new Set(['red', 'green', 'yellow']);

const set2 = new Set().add('red').add('green').add('yellow');

console.log(set1);  // Set(3) { 'red', 'green', 'yellow' }
console.log(set2);

console.log('--------------------------------------------');
