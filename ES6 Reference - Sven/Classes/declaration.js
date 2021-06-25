/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Classes - Declaration
// -------------------------------------------------------------------------------------------------------

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }
}

const sven = new Person('Sven', 'Kohn');

console.log(sven.getFullName());

// Returns all string keys of all enumerable own (non-inherited) properties.
console.log(Object.keys(sven));                                           // [ 'first', 'last' ]

// Returns all string keys of all own properties.
console.log(Object.getOwnPropertyNames(sven));                            // [ 'first', 'last' ]

// Returns all members of a class that are not enumerable
console.log(Object.getOwnPropertyNames(Person.prototype));                // [ 'constructor', 'getFullName' ]

// Returns all members of a class instance that are not enumerable
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(sven)));     // [ 'constructor', 'getFullName' ]
