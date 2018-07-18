// For-of is a new loop that replaces both for-in and forEach

const letters = ['a', 'b', 'c'];

for(const [index, element] of letters.entries()) {
  console.log(`${index} : ${element}`);
}

const names = new Map([
  ['first', 'Sven'],
  ['last', 'Kohn']
]);

for(const [key, value] of names) {
  console.log(`${key} : ${value}`);
}