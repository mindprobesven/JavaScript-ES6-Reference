// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

// Objects have properties which are name : value pairs
let User = {
  firstName: 'Sven',
  lastName: 'Kohn',
  age: 38,
  // An object method
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  // An object method can call another method in the same object
  allInfo: function() {
    return this.fullName() + ' : ' + this.age;
  }
};

// To delete an object property
delete User.age;
console.log(JSON.stringify(User));

// To add an object property
User.age = 38;
console.log(User.age);

// Calling an object method
console.log(User.fullName());
console.log(User.allInfo());

// Use (for in) to iterate through an object's properties and get the name : value pairs 
for(let propertyName in User) {
  console.log(propertyName + ' : ' + User[propertyName]);
}

// -------------------------------------------------------------------------------------------------------

// An object array with 3 objects
let Users = [
  {
    firstName: 'Sven',
    lastName: 'Kohn',
    age: 38
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 42
  },
  {
    firstName: 'Thomas',
    lastName: 'Fischer',
    age: 35
  }
]

// Use (for of) to iterate through an object array
for(let user of Users) {
  console.log(user.firstName + ' : ' + user.lastName + ' : ' + user.age);
}

// -------------------------------------------------------------------------------------------------------

// Creating an object prototype with an object contructor function 
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  };
  this.allInfo = function() {
    return this.fullName() + ' : ' + this.age;
  };
}

// Create new objects from the (Person) object prototype
let sven = new Person('Sven', 'Kohn', 38);
let john = new Person('John', 'Doe', 42);

console.log(JSON.stringify(sven));
console.log(JSON.stringify(john));
console.log(sven.fullName());
console.log(sven.allInfo());

// Adding a property to an existing object
sven.location = 'Barcelona';
console.log(JSON.stringify(sven));

// Adding an object method to an existing object prototype
Person.prototype.changeName = function(name) {
  this.firstName = name;
}

sven.changeName('Tom');
console.log(JSON.stringify(sven));