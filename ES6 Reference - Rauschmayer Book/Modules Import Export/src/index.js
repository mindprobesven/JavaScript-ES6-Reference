// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

/*
// Import individual things from a module
import { square, diagonal } from './named-exports-module';

console.log(square(5));
console.log(diagonal(5, 10));
*/

// Or import the whole module and refer to its named exports via property notation.
import * as nem from './named-exports-module';
console.log(nem.square(5));
console.log(nem.diagonal(5, 10));

// -------------------------------------------------------------------------------------------------------

// Import a module with a single default export value
import myFunc from './default-export-module';
console.log(myFunc());

// -------------------------------------------------------------------------------------------------------

// This module has a revealing module pattern export style
import { addNumbers } from './rmp-export-module';
console.log(addNumbers(5));

// -------------------------------------------------------------------------------------------------------

// Imports of ES6 modules are read-only views on the exported entities.
import { counter, incCounter, changeCounter, User } from './readonly-module';
console.log(counter); // Returns 3
incCounter();
console.log(counter); // Returns 4

//counter = 10; // This will not work because counter is read only.
console.log(changeCounter(99)); // Changed via the module's internal function
console.log(counter); // Returns 99

console.log(User.name); // Returns Sven
User.name = 'Thomas'; // You can change things like an exported object's properties
console.log(User.name); // Returns Thomas