// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

function asyncFunc() {
  return new Promise((resolve, reject) => {
    resolve('This is a result');
    reject('This is an error');
  });
}

asyncFunc().then(result => console.log(result)).catch(error => console.log(error));

// Chaining
function asyncFunc1({ phrase, word }) {
  return new Promise((resolve, reject) => {
    if(phrase)
      resolve([phrase, word].join(' '));
    resolve(word);
  });
}

asyncFunc1({ word: 'Promises' } )
.then(result1 => {
  console.log(result1);
  return asyncFunc1({ phrase: result1, word: 'are' });
}).then(result2 => {
  console.log(result2);
  return asyncFunc1({ phrase: result2, word: 'awesome' });
}).then(result3 => {
  console.log(result3);
}).catch(error => console.log(error));

// -------------------------------------------------------------------------------------------------------

// Parallel execution
function first() {
  return new Promise((resolve, reject) => {
    resolve('first');
  });
}

function second() {
  return new Promise((resolve, reject) => {
    resolve('second');
  });
}

Promise.all([first(), second()])
.then(([result1, result2]) => console.log(result1, result2))
.catch(error => console.log(error));

// -------------------------------------------------------------------------------------------------------

// Promises and generators

function async(it, context = undefined) {
  // Create a generator if necessary
  const iterator = typeof it === 'function' ? it() : it;
  // yield will return a promise
  const { value } = iterator.next(context);
  // Once the promise is resolved, the value is undefined
  if(typeof value !== 'undefined') {
    // Waits till the promise resolves, then calls the async function passing the generator object and the resolved data for the next() call
    value.then(resolved => async(iterator, resolved)).catch(error => iterator.throw(error));
  }
}

async(function* () {
  try {
    // yielding one promise
    const result = yield first();
    console.log(result);

    // yielding multiple promises
    const [result1, result2] = yield Promise.all([first(), second()]);
    console.log(result1, result2);
  }
  catch(error) {
    console.log(error);
  }
});