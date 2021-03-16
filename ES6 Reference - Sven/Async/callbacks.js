/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Callbacks
// -------------------------------------------------------------------------------------------------------

const showData = (data) => {
  console.log('Data received after 1 second');
  console.log(data);
  console.log('--------------------------------------------');
};

const asyncFetchData = (callback) => {
  console.log('Fetching data...');
  setTimeout(() => callback('My data'), 1000);
};

asyncFetchData(showData);

// -------------------------------------------------------------------------------------------------------
// Error handling
// -------------------------------------------------------------------------------------------------------

const asyncFetchDataFaulty = (callback) => {
  console.log('Fetching data...');
  setTimeout(() => {
    try {
      throw new Error('Something wend wrong!');
    } catch (error) {
      console.log(error);
      console.log(error.name);
      console.log(error.message);
      console.log(error.stack);
    }
  }, 1000);
};

asyncFetchDataFaulty(showData);
