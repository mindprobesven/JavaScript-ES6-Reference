/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Numbers - Random numbers
// -------------------------------------------------------------------------------------------------------

// Returns a random number between min and max (both included)
const getRndInteger = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

console.log(getRndInteger(1, 10));

console.log('--------------------------------------------');
