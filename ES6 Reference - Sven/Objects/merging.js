// -------------------------------------------------------------------------------------------------------
// Object - Merging objects
// -------------------------------------------------------------------------------------------------------

const object1 = {
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

const object2 = {
  level: 'Haxor',
  nationality: 'German',
};

console.log(JSON.stringify(object1));
console.log(JSON.stringify(object2));

console.log('---------------------------------------------------------');

// METHOD 1: Object.assign
const newObject1 = Object.assign(object1, object2);
console.log(JSON.stringify(newObject1));

// METHOD 2: Spread operator
const newObject2 = { ...object1, ...object2 };
console.log(JSON.stringify(newObject2));
