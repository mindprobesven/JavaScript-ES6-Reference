// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

/*Symbols are a new ES6 primitive entity used to create unique property
keys to prevent name clashes.*/

const mySymbol1 = Symbol();
const mySymbol2 = Symbol();

// Created Symbols are unique
console.log(mySymbol1 === mySymbol2); // Returns false

// -------------------------------------------------------------------------------------------------------

const mySymbol = Symbol('unique descriptor');
console.log(mySymbol);

//let message = 'This is a symbol' + mySymbol; // Throws error: Symbol does not coherce to a string
let message = 'This is a symbol: ' + mySymbol.toString(); // Works because the symbol was converted to a string
console.log(message);

// -------------------------------------------------------------------------------------------------------

const symbol1 = Symbol('Unique key [symbol1]');
const symbol2 = Symbol('Unique key [symbol2]');

let obj2 = {
  [symbol1]: 'Sven',
  [symbol2]: 'Tom'
}

console.log(obj2[symbol1] + ' : ' + obj2[symbol2]);

// -------------------------------------------------------------------------------------------------------

// Symbols as semi-private property keys

// We wrap _privateKey inside a closure to hide it from the public scope
let myClass = (function() {
  const _privateKey = Symbol('This is a private key');

  class myClass {
    constructor(x, y) {
      this.publicKey = x;
      this[_privateKey] = y;
    }
  
    getY() {
      return this[_privateKey];
    }
  }

  return myClass;
})();

const newClass = new myClass(1, 2);

console.log(newClass.publicKey); // Public key can be accessed directly as usual

try{
  console.log(newClass[_privateKey]); // Throws error because the _privateKey is private
}
catch(error) {
  console.log(error);
}

console.log(newClass.getY()); // This works because it accesses _privateKey within the private scope