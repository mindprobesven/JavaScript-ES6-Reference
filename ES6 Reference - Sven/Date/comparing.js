/* eslint-disable no-tabs */
/* eslint-disable no-multi-spaces */
// -------------------------------------------------------------------------------------------------------
// Date - comparing dates
// -------------------------------------------------------------------------------------------------------

const today = new Date();
const futureDate = new Date('2050');

console.log(today.toLocaleDateString());        // 6/23/2021
console.log(futureDate.toLocaleDateString());   // 1/1/2050

if (futureDate > today) {
  console.log('today is before futureDate');
}
