/* eslint-disable max-classes-per-file */
/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Classes - Sub-classing
// -------------------------------------------------------------------------------------------------------

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.counter = 0;
  }

  getFullName() {
    return `${this.first} ${this.last}`;
  }

  describe() {
    return `${this.first} ${this.last}`;
  }

  overwriteThisMethod() {
    return this.counter;
  }
}

class Employee extends Person {
  constructor(first, last, title) {
    super(first, last);

    this.title = title;
    this.counter = 1;
  }

  // Here we call getFullName() from the base class
  getFullNameAndTitle() {
    return `${this.getFullName()} : ${this.title}`;
  }

  // Here we overwrite describe() from the base class, but still use describe() from the base class using super.describe()
  describe() {
    return `${super.describe()} : ${this.title}`;
  }

  // Here we overwrite overwriteThisMethod() from the base class.
  overwriteThisMethod() {
    return this.counter;
  }
}

const sven = new Employee('Sven', 'Kohn', 'CTO');

console.log(sven.getFullName());              // Sven Kohn
console.log(sven.getFullNameAndTitle());      // Sven Kohn : CTO
console.log(sven.describe());                 // Sven Kohn : CTO
console.log(sven.overwriteThisMethod());      // 1 = this.counter declared in the Employee class

// --------

console.log(Object.keys(sven));                                           // [ 'first', 'last', 'counter', 'title' ]
console.log(Object.getOwnPropertyNames(sven));                            // [ 'first', 'last', 'counter', 'title' ]
console.log(Object.getOwnPropertyNames(Person.prototype));                // [ 'constructor', 'getFullName', 'describe', 'overwriteThisMethod' ]
console.log(Object.getOwnPropertyNames(Employee.prototype));              // [ 'constructor', 'getFullNameAndTitle', 'describe', 'overwriteThisMethod' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(sven)));     // [ 'constructor', 'getFullNameAndTitle', 'describe', 'overwriteThisMethod' ]
