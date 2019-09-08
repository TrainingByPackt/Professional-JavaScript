const sum = x => y => x + y;
const multiply = x => y => x * y;

const compose = (f, g) => x => f(g(x));

const add1 = sum(1);
const add2 = sum(2);
const double = multiply(2);

console.assert(
  compose(
    add1,
    double
  )(2) === 5,
  'double -> add1'
);
console.assert(
  compose(
    double,
    add1
  )(2) === 6,
  'add1 -> double'
);
console.assert(
  compose(
    double,
    add2
  )(2) === 8,
  'add2 -> double'
);
console.assert(
  compose(
    add2,
    double
  )(2) === 6,
  'double -> add2'
);
