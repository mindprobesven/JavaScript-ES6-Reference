// -------------------------------------------------------------------------------------------------------
// Object - Constructor
// -------------------------------------------------------------------------------------------------------

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = () => `${this.firstName} ${this.lastName}`;
}

// Adding an object method
Person.prototype.allInfo = function () {
  return `${this.firstName} ${this.lastName} ${this.age}`;
};

// Use Object.defineProperty to assign getter and setter methods
Object.defineProperty(Person.prototype, 'getAge', {
  get: function () { return this.age; },
});

Object.defineProperty(Person.prototype, 'setAge', {
  set: function (value) { this.age = value; },
});

Object.defineProperties(Person.prototype, {
  level: { value: 'Haxor' },
});

const sven = new Person('Sven', 'Kohn', 38);

console.log(JSON.stringify(sven));

// Using getter and setter
console.log(sven.getAge);
sven.setAge = 40;
console.log(sven.age);

console.log(Object.getOwnPropertyNames(sven));
console.log(Object.keys(sven));
console.log(Reflect.ownKeys(sven));
console.log(Object.keys(sven));
