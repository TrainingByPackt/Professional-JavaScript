const sum = (x, y) => x + y;
const sumCurried = x => y => x + y;

console.assert(
  sum(1, 2) === sumCurried(1)(2),
  'curried version works the same for positive numbers'
);
console.assert(
  sum(10, -5) === sumCurried(10)(-5),
  'curried version works the same with a negative operand'
);
