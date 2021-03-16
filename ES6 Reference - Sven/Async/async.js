/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */

// -------------------------------------------------------------------------------------------------------
// Async and await
// -------------------------------------------------------------------------------------------------------

const loadData = () => {
  console.log('Fetching data...');
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('My data'), 1000);
  });
};

async function fetchData() {
  const data = await loadData();
  return data;

  // Shorter syntax without await
  // return loadData();
}

fetchData().then((data) => {
  console.log('Data received after 1 second');
  console.log(data);
});

// -------------------------------------------------------------------------------------------------------
// Error handling
// -------------------------------------------------------------------------------------------------------

const loadDataFaulty = () => {
  console.log('Fetching data...');
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Something wend wrong!')), 1000);
  });
};

// Here an error is handled in the async function call result
async function fetchDataFaulty1() {
  const data = await loadDataFaulty();
  return data;
}

fetchDataFaulty1().then((data) => {
  console.log('Data received after 1 second');
  console.log(data);
}).catch((error) => {
  console.log('Error in fetchDataFaulty1()');
  console.log(error.message);
});

// Here an error is intercepted in the async function and then forwarded to the async function call result
async function fetchDataFaulty2() {
  try {
    const data = await loadDataFaulty();
    return data;
  } catch (error) {
    console.log('Error in loadDataFaulty() intercepted and forwarded');
    console.log(error.message);
    throw error;
  }
}

fetchDataFaulty2().then((data) => {
  console.log('Data received after 1 second');
  console.log(data);
}).catch((error) => {
  console.log('Error in fetchDataFaulty2()');
  console.log(error.message);
});
