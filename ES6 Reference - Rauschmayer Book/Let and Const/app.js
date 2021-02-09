// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

// var is function scoped
// let is block scoped

// Block scoping means that you can shadow variables within a function
function func() {
  const x = 10;

  if(true) {
    const x = 5;
    console.log(x); // Returns 5
  }

  console.log(x); // Returns 10
}

func();

// -------------------------------------------------------------------------------------------------------

// const variables are immutable. You cannot assign different values to them.
const color = 'red';

try {
  color = 'green'; // Will throw an error
}
catch(error) {
  console.log(error);
}

// conts does not make the value immutable though
const obj = { foo: 'sven' };
obj.bar = 'tom';
console.log(obj); // The value is mutable

try {
  obj = {}; // Throws error because we cannot assign a different value
}
catch(error) {
  console.log(error);
}

// To make the value of obj immutable, you can freeze it
const obj2 = Object.freeze({ foo: 'sven'} );
obj2.bar = 'tom';
obj2.foo.test = 'tom';
console.log(obj2.bar); // Returns undefined
console.log(obj2.foo.test); // Returns undefined

// -------------------------------------------------------------------------------------------------------
















let initApp = () => {
  console.log('Init...');
  
  testLet();
  testVar();
  
  testConst();
}

// Let limits variables to their scope correctly and no longer modifies on a global scope
let testLet = () => {
  let a = 50;
  
  if(true) {
    let a = 500;
    console.log(a);
  }
  
  console.log(a);
  return false;
}

let testVar = () => {
  var b = 10;
  
  if(true) {
    var b = 100;
    console.log(b);
  }
  
  console.log(b);
  return false;
}

// Const prevents reasignment of a variable
let testConst = () => {
  const colors = 'Red';
  console.log(colors);
  
  // This will throw an error because colors was assigned to be a string
  try {
    colors = 5;
    console.log(colors);
  }
  catch(error) {
    console.log(error);
  }

  return false;
}

window.onload = initApp();