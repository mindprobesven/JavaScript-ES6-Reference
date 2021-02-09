export let counter = 3;

export function incCounter() {
  counter ++;
}

export function changeCounter(x) {
  counter = x;
  return counter;
}

export const User = {
  name: 'Sven',
  age: 38
};