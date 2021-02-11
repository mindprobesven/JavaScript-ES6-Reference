// -------------------------------------------------------------------------------------------------------
// Object - Traversal
// -------------------------------------------------------------------------------------------------------

const User = {
  firstName: 'Sven',
  lastName: 'Kohn',
  age: 38,
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

console.log(JSON.stringify(User));

// Retrieves all string keys of all own properties.
console.log(Object.getOwnPropertyNames(User));

// Retrieves all string keys of all enumerable own (non-inherited) properties.
console.log(Object.keys(User));

// Retrieves all keys of all own properties.
console.log(Reflect.ownKeys(User));

console.log('----------------------------------------');

// Object iteration
Object.keys(User).forEach((key) => {
  console.log(key);
});

Object.values(User).forEach((value) => {
  console.log(value);
});

Object.entries(User).forEach(([key, value]) => {
  console.log(key, value);
});

console.log('----------------------------------------');

const arr = Object.entries(User).map(([key, value]) => {
  console.log(key, value);
  return [key, value];
});

console.log(arr);

console.log('----------------------------------------');

console.log(Object.getOwnPropertyDescriptor(User, 'firstName'));
console.log(Object.getPrototypeOf(User));
