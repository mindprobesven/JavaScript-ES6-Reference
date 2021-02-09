// -------------------------------------------------------------------------------------------------------
// Object - Definition
// -------------------------------------------------------------------------------------------------------

const User = {
  // Object property keys and values
  firstName: 'Sven',
  lastName: 'Kohn',
  age: 40,
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
  }
};

console.log(JSON.stringify(User));
