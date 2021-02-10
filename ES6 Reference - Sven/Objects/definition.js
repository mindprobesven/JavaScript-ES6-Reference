// -------------------------------------------------------------------------------------------------------
// Object - Definition
// -------------------------------------------------------------------------------------------------------

const User = {
  // Object property keys and values
  firstName: 'User',
  lastName: 'Kohn',
  age: 38,
  // Object methods
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  changeName(name) {
    this.firstName = name;
  },
  // Getter method
  get getAge() {
    return this.age;
  },
  // Setter method
  set setAge(value) {
    this.age = value;
  },
};

console.log(JSON.stringify(User));

// Using getter and setter
console.log(User.getAge);
User.setAge = 40;
console.log(User.age);
