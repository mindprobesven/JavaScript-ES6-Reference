/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Classes - Private properties and methods
// -------------------------------------------------------------------------------------------------------

const Person = (() => {
  // The private properties (privateProps) for each instance of the class are stored in a Map or WeakMap
  const propsWeakMap = new Map();

  // In arrow functions, this retains the value of the enclosing lexical context's this. Therefore, if
  // this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored.
  // The solution is to use a regular function.
  function getPrivateFullName() {
    return `${this.first} ${this.last}`;
  }

  function getPrivatePropsWeakMapSize() {
    return propsWeakMap.size;
  }
  class PersonClass {
    constructor(first, last, id) {
      this.first = first;
      this.last = last;

      const privateProps = { id };

      // We set 'this' as the identifier for each instance of the class that is created and store
      // the privateProps
      propsWeakMap.set(this, privateProps);
    }

    getPrivateID() {
      // Since 'this' is used as the identifier we can get the privateProps in the Map / WeakMap
      // for the current class instance calling the getPrivateID() method.
      return propsWeakMap.get(this).id;
    }

    setPrivateID(id) {
      propsWeakMap.set(this, { ...propsWeakMap.get(this), id });
    }

    getPropsWeakMapSize() {
      return getPrivatePropsWeakMapSize();
    }

    getFullName() {
      // With call(), an object can use a method belonging to another object.
      // Here, getPrivateFullName is a method defined outside the class. We
      // can use this method inside the class by using call() and passing 'this'
      // which is the PersonClass.
      return getPrivateFullName.call(this);
    }
  }
  return PersonClass;
})();

const sven = new Person('Sven', 'Kohn', '100');
const barbara = new Person('Barbara', 'Massari', '200');

console.log(sven.getPrivateID());       // 100
console.log(barbara.getPrivateID());    // 200

barbara.setPrivateID('9999');

console.log(sven.getPrivateID());       // 100
console.log(barbara.getPrivateID());    // 9999

console.log(barbara.getPropsWeakMapSize());   // 2 - Because there are two instances of the Person class

console.log(sven.getFullName());        // Sven Kohn
console.log(barbara.getFullName());     // Barbara Massari

// Using this method, private properties and methods are not exposed
console.log(Object.getOwnPropertyNames(sven));    // [ 'first', 'last' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(sven)));
// [
//   'constructor',
//   'getPrivateID',
//   'setPrivateID',
//   'getPropsWeakMapSize',
//   'getFullName'
// ]
