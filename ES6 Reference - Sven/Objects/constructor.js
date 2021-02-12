// -------------------------------------------------------------------------------------------------------
// Object - Constructor
// -------------------------------------------------------------------------------------------------------

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = () => `${this.firstName} ${this.lastName}`;
}

// Use Object.defineProperty to assign getter and setter methods
Object.defineProperty(Person.prototype, 'getAge', {
  get() { return this.age; },
});

Object.defineProperty(Person.prototype, 'setAge', {
  set(value) { this.age = value; },
});

// Adding an object method
Person.prototype.allInfo = function () {
  return `${this.firstName} ${this.lastName} ${this.age}`;
};

// Adding a property
// METHOD 1
Object.defineProperties(Person.prototype, {
  level: { value: 'Haxor' },
});

// METHOD 2
Person.prototype.car = 'Rodius';

// -------------------------------------------------------------------------------------------------------

const sven = new Person('Sven', 'Kohn', 38);

console.log(JSON.stringify(sven));

console.log('---------------------------------------------------------');

// Using getter and setter
console.log(sven.getAge);
sven.setAge = 40;
console.log(sven.age);

console.log(sven.allInfo());
console.log(sven.level);
console.log(sven.car);

console.log(Reflect.ownKeys(sven));
// OUTPUT: [ 'firstName', 'lastName', 'age', 'fullName' ]

console.log(Object.getOwnPropertyDescriptor(sven, 'firstName'));
// OUTPUT: { value: 'Sven', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptor(sven, 'car'));
// OUTPUT: undefined
