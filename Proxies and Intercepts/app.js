// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

// Proxies let you intercept and customize or add operations performed on objects
// For exmaple getting properties, setting, has, etc.

// Intecepting object operations
const targetObject = {
  foo: 'Sven'
};

const handler = {
  get(targetObject, propKey, receiver) {
    console.log(`GET ${propKey}`); // We perform an additional custom task
    
    // Instead of performing the trap's operations manually
    //return targetObject[propKey];
    
    // We forward it using Reflect
    return Reflect.get(targetObject, propKey, receiver);
  },
  
  has(targetObject, propKey) {
    console.log(`HAS ${propKey}`);
    return Reflect.has(targetObject, propKey);
  }
}

// proxy is the object whose operations we are intercepting
const proxy = new Proxy(targetObject, handler);

// The handler intercepts the get property operation, performs
// additional tasks and then forwards the original operation with Reflect
console.log(proxy.foo); // Returns Sven

// The handler triggers [has] because of the in operator
console.log('bar' in targetObject); // Returns false
console.log('foo' in proxy); // Returns 'HAS foo' and true

// The handler does not intercept [set]. Therefore, proxy.bar is forwarded to the
// target object and leads to target.bar being set.
proxy.bar = 'abc';
console.log(targetObject.bar); // Returns abc

// -------------------------------------------------------------------------------------------------------

// Intercepting function calls
const targetFunc = function(name) {
  console.log(`Function: ${name}`);
  return name;
}

const handler2 = {
  apply(targetFunc, thisArgument, args) {
    console.log(`APPLY ${targetFunc} : ${thisArgument} : ${args}`);
    return Reflect.apply(targetFunc, thisArgument, args);
  }
}

const proxy2 = new Proxy(targetFunc, handler2);
console.log(targetFunc('Sven'));
console.log(proxy2('Tom'));