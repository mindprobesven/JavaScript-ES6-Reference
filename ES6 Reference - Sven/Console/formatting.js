/* eslint-disable no-console */
/* eslint-disable no-multi-spaces */
// -------------------------------------------------------------------------------------------------------
// Console output formatting techniques
// -------------------------------------------------------------------------------------------------------

console.log('Log');
console.warn('Warning');
console.error('Error');

// Format specifiers
// -------------------------------------------------------------------------------------------------------
const value = 10;
const available = 'available';
console.log('There are %d options', value, available);    // Output: There are 10 options available

/*
%s – Format as a string.
%i or %d – Format as an integer.
%f – Format as a floating point value.
%O – Format as a JavaScript object.
%o – Format as a DOM element.
%c – Format as a CSS rule, which is applied to the emitted log line.
*/

// Tabulated output
// -------------------------------------------------------------------------------------------------------
const objects = [{ a: 1, x: 'a' }, { a: 2, x: 'b' }];
console.table(objects);

/*
┌─────────┬───┬─────┐
│ (index) │ a │  x  │
├─────────┼───┼─────┤
│    0    │ 1 │ 'a' │
│    1    │ 2 │ 'b' │
└─────────┴───┴─────┘
*/

// Conditional output
// -------------------------------------------------------------------------------------------------------
// Logged only if the expression evaluates to false
console.assert(true, 'I never appear');
console.assert(false, 'I will be logged');

const showConsoleOutput = false;
console.assert(showConsoleOutput, 'Is false, so shown');

// Message groups
// -------------------------------------------------------------------------------------------------------
// Visually group sections of output together
console.log('Starting the group output');
console.group();
console.log('1');
console.log('2');
console.groupEnd();

// Advanced styling with CSS
// -------------------------------------------------------------------------------------------------------
console.log('%cHello %cWorld%c!!', // string to be printed
  'color: blue;', // applies color formatting to the 1st substring
  'font-size: xx-large;', // applies font formatting to the 2nd substring
  '/* no CSS rule*/'); // does not apply any rule to the remaing substring

// String padding
// -------------------------------------------------------------------------------------------------------
// string.padStart(<maxLength>, <padString>)
// string.padEnd(<maxLength>, <padString>)
const purchase = [
  ['Masks', '9.99'],
  ['Shirt', '20.00'],
  ['Jacket', '200.00'],
  ['Gloves', '10.00'],
];

purchase.forEach(([item, price]) => {
  console.log(item + price.padStart(20 - item.length));
});
