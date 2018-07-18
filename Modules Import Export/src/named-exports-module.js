// A module can export multiple things
export const sqrt = Math.sqrt;

export function square(x) {
  return x * x;
}

export function diagonal(x, y) {
  return sqrt(square(x) + square(y));
}