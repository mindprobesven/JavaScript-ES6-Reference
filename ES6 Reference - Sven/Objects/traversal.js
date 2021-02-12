// -------------------------------------------------------------------------------------------------------
// Object - Traversal
// -------------------------------------------------------------------------------------------------------

const User = {
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

console.log(JSON.stringify(User));

console.log('----------------------------------------');

// Returns all string keys of all own properties.
console.log(Object.getOwnPropertyNames(User));

// Returns all string keys of all enumerable own (non-inherited) properties.
console.log(Object.keys(User));

// Returns all keys of all own properties.
console.log(Reflect.ownKeys(User));

// Returns property descriptors (writable, enumerable, configurable)
console.log(Object.getOwnPropertyDescriptor(User, 'firstName'));

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
