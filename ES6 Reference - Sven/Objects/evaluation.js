// -------------------------------------------------------------------------------------------------------
// Object - Evaluation
// -------------------------------------------------------------------------------------------------------

const user = {
  firstName: 'Sven',
  lastName: 'Kohn',
  age: 38,
  car: { color: 'red' },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  changeName(name) {
    this.firstName = name;
  },
  get getAge() {
    return this.age;
  },
  set setAge(value) {
    this.age = value;
  },
};

console.log(JSON.stringify(user));

console.log('---------------------------------------------------------');

// WRONG: Do not access Object.prototype method 'hasOwnProperty' from target object.
// eslint-disable-next-line no-prototype-builtins
const hasCarProperty = user.hasOwnProperty('car');
console.log(hasCarProperty);

// CORRECT: Call hasOwnProperty method from Object.prototype instead
const hasAgeProperty = Object.prototype.hasOwnProperty.call(user, 'age');
console.log(hasAgeProperty);
