// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

'use strict';

// Sorting an array
const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.sort())

// Reversing the order
console.log(fruits.reverse())

// -------------------------------------------------------------------------------------------------------

// Numeric sort ascending

/*
We use a compare function
Sort() sorts values as strings
The compare function returns a negative, zero or positive value
e.g. a - b is 40 - 100 which returns a negative value
sort will put 40 as a lower value than 100
*/

const points = [40, 100, 1, 5, 25, 10]
console.log(points.sort((a,b) => a - b))

//Numeric sort descending
console.log(points.sort((a,b) => b - a))

// -------------------------------------------------------------------------------------------------------

// Find highest or lowest number in an array
const numbers = [1,5,7,3,10,8]
console.log(Math.max.apply(null, numbers)) // returns 10
console.log(Math.min.apply(null, numbers)) // returns 1

// Custom max and min methods, fastest performance
const myArrayMax = (numbers) => {
  let len = numbers.length
  let max = -Infinity

  while(len--) {
    if(numbers[len] > max) {
      max = numbers[len]
    }
  }
  return max
}

const myArrayMin = (numbers) => {
  let len = numbers.length
  let min = Infinity

  while(len--) {
    if(numbers[len] < min) {
      min = numbers[len]
    }
  }
  return min
}

console.log(myArrayMax(numbers))
console.log(myArrayMin(numbers))

// -------------------------------------------------------------------------------------------------------

// Sorting object arrays
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010},
  {type:"Mercedes", year:2013},
  {type:"Audi", year:2007},
  {type:"VW", year:2007},
]

// Comparing numeric property values
// Ascending order
console.log(cars.slice().sort((a,b) => a.year - b.year))
// Descending order
console.log(cars.slice().sort((a,b) => b.year - a.year))

// Comparing string property values
const compareAscending = (a, b) => {
  const x = a.type.toLowerCase()
  const y = b.type.toLowerCase()

  if(x < y) { return -1 }
  if(x > y) { return 1 }
  return 0
}

const compareDescending = (a, b) => {
  const x = a.type.toLowerCase()
  const y = b.type.toLowerCase()

  if(x < y) { return 1 }
  if(x > y) { return -1 }
  return 0
}

console.log(cars.slice().sort(compareAscending))
console.log(cars.slice().sort(compareDescending))