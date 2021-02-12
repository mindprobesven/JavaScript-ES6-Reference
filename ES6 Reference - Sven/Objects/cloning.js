// -------------------------------------------------------------------------------------------------------
// Object - Cloning
// -------------------------------------------------------------------------------------------------------

const originalObject = {
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

console.log(JSON.stringify(originalObject));

console.log('---------------------------------------------------------');

// METHOD 1: Object.assign
// eslint-disable-next-line prefer-object-spread
const shallowObjectCopyAssign = Object.assign({}, originalObject);
console.log(JSON.stringify(shallowObjectCopyAssign));

// METHOD 2: Spread operator - Preferred
const shallowObjectCopy = { ...originalObject };

/*
NOTE: A shallow copy successfully copies primitive types like numbers and strings,
but any object reference will not be recursively copied, but instead the new, copied
object will reference the same initial object.
*/

// OK: This only changes in the original object
originalObject.firstName = 'Thomas';

// PROBLEM: This change is also reflected in the shallow copy !!!
originalObject.car.color = 'blue';

console.log(JSON.stringify(originalObject));
console.log(JSON.stringify(shallowObjectCopy));
