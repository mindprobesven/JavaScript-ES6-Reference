/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Classes - Private properties and methods
// -------------------------------------------------------------------------------------------------------

const Person = (() => {
  // Here privateProps and getFullNamePrivate() are private because they are in a closure
  const privateProps = {};

  // In arrow functions, this retains the value of the enclosing lexical context's this. Therefore, if
  // this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored.
  // The solution is to use a regular function.
  function getFullNamePrivate() {
    return `${this.first} ${this.last}`;
  }

  class PersonClass {
    constructor(first, last, id) {
      this.first = first;
      this.last = last;

      privateProps.privateID = id;
    }

    getFullName() {
      // With call(), an object can use a method belonging to another object.
      // Here, getFullNamePrivate is a method defined outside the class. We
      // can use this method inside the class by using call() and passing 'this'
      // which is the PersonClass.
      return getFullNamePrivate.call(this);
    }

    getPrivateID() {
      return privateProps.privateID;
    }

    setPrivateID(id) {
      privateProps.privateID = id;
    }

    get firstName() {
      return this.first;
    }

    set firstName(first) {
      this.first = first;
    }
  }
  return PersonClass;
})();

const sven = new Person('Sven', 'Kohn', '007');

console.log(sven.first);

// Using get and set
console.log(sven.firstName);
sven.firstName = 'Thomas';
console.log(sven.firstName);

console.log(sven.getFullName());

console.log(sven.getPrivateID());
sven.setPrivateID('010');
console.log(sven.getPrivateID());

console.log(Object.getOwnPropertyNames(sven));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(sven)));

const barbara = new Person('Barbara', 'Massari', '250');

console.log(barbara.first);

// Using get and set
console.log(barbara.firstName);
barbara.firstName = 'Valentina';
console.log(barbara.firstName);

console.log(barbara.getFullName());

console.log(barbara.getPrivateID());
barbara.setPrivateID('299');
console.log(barbara.getPrivateID());

console.log(Object.getOwnPropertyNames(barbara));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(barbara)));

console.log(sven.first);
console.log(sven.getPrivateID());
console.log(barbara.getPrivateID());
