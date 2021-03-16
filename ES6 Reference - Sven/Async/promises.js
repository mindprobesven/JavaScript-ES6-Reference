/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Promises
// -------------------------------------------------------------------------------------------------------

const asyncFetchData = () => {
  console.log('Fetching data...');
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('My data'), 1000);
  });
};

asyncFetchData().then((data) => {
  console.log('Data received after 1 second');
  console.log(data);
});

// -------------------------------------------------------------------------------------------------------
// Error handling
// -------------------------------------------------------------------------------------------------------

const asyncFetchDataFaulty = () => {
  console.log('Fetching data...');
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something wend wrong!')), 1000);
  });
};

asyncFetchDataFaulty().then((data) => {
  console.log('Data received after 1 second');
  console.log(data);
}).catch((error) => {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
});

// -------------------------------------------------------------------------------------------------------
// Immediate resolve and reject
// -------------------------------------------------------------------------------------------------------

// A function returning an immediately resolved promise
const immediateResolve = () => {
  console.log('Returning immediately resolved promise');
  return Promise.resolve('My data');
};

immediateResolve().then((data) => console.log(data)).catch((error) => console.log(error));

// A function returning an immediately rejected promise
const immediateReject = () => {
  console.log('Returning immediately rejected promise');
  return Promise.reject(new Error('Something wend wrong!'));
};

immediateReject().then((data) => console.log(data)).catch((error) => console.log(error));
