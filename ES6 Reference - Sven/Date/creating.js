/* eslint-disable no-multi-spaces */
// -------------------------------------------------------------------------------------------------------
// Date - Creating
// -------------------------------------------------------------------------------------------------------

// Creates a new date object with the current date and time:
// -------------------------------------------------------------------------------------------------------
const date = new Date();

console.log(date);                    // 2021-06-23T12:03:00.764Z
console.log(typeof date);             // object

// The valueOf() method returns the primitive value of a Date object.
// The primitive value is returned as the number of millisecond since midnight January 1, 1970 UTC
console.log(date.valueOf());          // 1624453148464

console.log(date.toString());         // Wed Jun 23 2021 14:06:39 GMT+0200 (Central European Summer Time)
console.log(date.toDateString());     // Wed Jun 23 2021
console.log(date.toTimeString());     // 14:09:13 GMT+0200 (Central European Summer Time)

console.log(date.toLocaleString());       // 6/23/2021, 2:09:13 PM
console.log(date.toLocaleDateString());   // 6/23/2021
console.log(date.toLocaleTimeString());   // 2:10:26 PM

console.log(date.toUTCString());          // Wed, 23 Jun 2021 12:10:52 GMT
console.log(date.toISOString());          // 2021-06-23T12:11:12.734Z
console.log(date.toJSON());               // 2021-06-23T12:11:12.734Z

// Creates a new date object with a specified date and time:
// -------------------------------------------------------------------------------------------------------
// Note: JavaScript counts months from 0 to 11.
// January is 0. December is 11.
const newDate1 = new Date(2021, 11, 24, 10, 33, 30);
console.log(newDate1.toISOString());     // 2021-12-24T09:33:30.000Z

const newDate2 = new Date(2021, 11, 24);
console.log(newDate2.toString());        // Fri Dec 24 2021 00:00:00 GMT+0100 (Central European Standard Time)
console.log(newDate2.toLocaleString());  // 12/24/2021, 12:00:00 AM

// Creates a new date object from a date string
//-------------------------------------------------------------------------------------------------------
const dateFromString = new Date('October 13, 2014 11:13:00');
console.log(dateFromString.toString());        // Mon Oct 13 2014 11:13:00 GMT+0200 (Central European Summer Time)
console.log(dateFromString.toLocaleString());  // 10/13/2014, 11:13:00 AM

// Creates a new date object from an ISO date string
//-------------------------------------------------------------------------------------------------------
// ISO 8601 is the international standard for the representation of dates and times (YYYY-MM-DD).
const dateFromISODate = new Date('2012-05-20');
console.log(dateFromISODate.toString());        // Sun May 20 2012 02:00:00 GMT+0200 (Central European Summer Time)
console.log(dateFromISODate.toLocaleString());  // 5/20/2012, 2:00:00 AM

const dateFromISODate1 = new Date('2021');
console.log(dateFromISODate1.toString());        // Fri Jan 01 2021 01:00:00 GMT+0100 (Central European Standard Time)
console.log(dateFromISODate1.toLocaleString());  // 1/1/2021, 1:00:00 AM

const dateTimeFromISODate = new Date('2021-03-25T12:00:00Z');
// Date and time is separated with a capital T.
// UTC time is defined with a capital letter Z.
console.log(dateTimeFromISODate.toString());        // Thu Mar 25 2021 13:00:00 GMT+0100 (Central European Standard Time)
console.log(dateTimeFromISODate.toLocaleString());  // 3/25/2021, 1:00:00 PM

// Creates a new date object as zero time (January 01, 1970 00:00:00 UTC) plus milliseconds
//-------------------------------------------------------------------------------------------------------
const fromZeroTime = new Date(86400000);      // One day (24 hours) is 86 400 000 milliseconds.
console.log(fromZeroTime.toString());         // Fri Jan 02 1970 01:00:00 GMT+0100 (Central European Standard Time)
console.log(fromZeroTime.toLocaleString());   // 1/2/1970, 1:00:00 AM

// Converting a valid time date string to milliseconds from zero time (January 01, 1970 00:00:00 UTC)
//-------------------------------------------------------------------------------------------------------
const milliseconds = Date.parse('2021-06-23');
console.log(milliseconds);                // 1624406400000
