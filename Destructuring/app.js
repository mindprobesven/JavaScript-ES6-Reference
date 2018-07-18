// Object destructuring
const obj = { first: 'Sven', last: 'Kohn' }

const { first: f, last: l } = obj;
console.log([f, l].join(' ')); // Returns Sven Kohn

const { first, last } = obj;
console.log([first, last].join(' ')); // Returns Sven Kohn

// Array destructuring
const array = [1, 2, 3];
const [x, y, z] = array;
console.log([x, y, z].join(', ')); // Returns 1, 2, 3

const [a, b, c] = 'Tom';
console.log([a, b, c].join(', ')); // Returns T, o, m

const [...args] = 'Sven';
console.log(args); // Returns array ["S", "v", "e", "n"]

// Optional default values
const user = { firstname: 'Sven' };
const {firstname, lastname = 'None', age} = user;
console.log(firstname); // Returns Sven
console.log(lastname); // Returns the default value None
console.log(age); // Returns undefined

// Computed property keys
const FOO = 'foo';
const objecto = { foo: 'Tom' };
const { [FOO]: test } = objecto;
console.log(test); // Returns Tom

// Symbol property key
const KEY = Symbol();
const object = { [KEY]: 'Sven' };
const { [KEY]: k } = object;
console.log(k); // Returns Sven

// Elision
const [,, g, h] = ['a', 'b', 'c', 'd']; // g = 'c'; h = 'd'

// Rest operator ...
const [i, ...j] = ['a', 'b', 'c']; // i='a'; j=['b', 'c']

// Example with for-of loop
const map = new Map().set('first', 'Sven').set('last', 'Kohn');
for(const [key, value] of map) {
  console.log([key, value].join(' '));
}