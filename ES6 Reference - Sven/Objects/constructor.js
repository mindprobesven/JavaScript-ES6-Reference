// -------------------------------------------------------------------------------------------------------
// Object - Constructor
// -------------------------------------------------------------------------------------------------------

function Person (first, last, age1) {
  this.firstName = first;
  this.lastName = last;
  this.age = age1;
  this.fullName = () => `${this.firstName} ${this.lastName}`;
};

// Use Object.defineProperty to assign getter and setter methods
Object.defineProperty(Person.prototype, 'getAge', {
  get: function() { return this.age; }
});

Object.defineProperty(Person.prototype, 'setAge', {
  set: function(value) { this.age = value; }
});

const sven = new Person('Sven', 'Kohn', 38);

console.log(JSON.stringify(sven));

console.log(sven.getAge);
sven.setAge = 40;
console.log(sven.age);
