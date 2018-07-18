// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

const arr = [1, 2, 3];

// Traditional function
const square1 = arr.map(function(x) {
  return x * x;
});

console.log(square1); // Returns [1, 4, 9]

// Arrow function
const square2 = arr.map((x) => x * x);
console.log(square2); // Returns [1, 4, 9]

// -------------------------------------------------------------------------------------------------------

function Prefixer(prefix) {
  this.prefix = prefix;

  this.prefixThis = function(arr) { // [A]
    var self = this;
    
    return arr.map(function(x) {
      
      try {
        return this.prefix + x; // Throws an error in strict mode because this is from [A]
      }
      catch(error) {
        console.log(error);
      }

      return self.prefix + x; // This works because self was declared as this
    });
  };
}

var pre = new Prefixer('Hello ');
console.log(pre.prefixThis(['Sven', 'Tom']));

// ES6 arrow functions don't shadow this. This is lexical

function Prefixer2(prefix) {
  this.prefix = prefix;

  this.prefixThis = (arr) => {
    return arr.map((x) => {
      return this.prefix + x;
    });
  };
}

var pre2 = new Prefixer2('Hello ');
console.log(pre2.prefixThis(['Sven', 'Tom']));