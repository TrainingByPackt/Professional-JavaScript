const compose2 = (f, g) => x => f(g(x));
const compose3 = (f, g, h) => x => f(g(h(x)));

const composeManyUnary = (...fns) => x =>
  fns.reduceRight((acc, curr) => curr(acc), x);

const composeManyReduce = (...fns) =>
  fns.reduce((acc, curr) => (...args) => acc(curr(...args)));

const add = x => y => x + y;
const multiply = x => y => x * y;
const add1 = add(1);
const add2 = add(2);
const double = multiply(2);

console.assert(compose2(double, add1)(0) === 2, 'compose2 behaves as expected');
console.assert(
  compose3(double, add1, add2)(0) === 6,
  'compose3 behaves as expected'
);
console.assert(
  composeManyUnary(double, add1)(0) === 2,
  'composeManyUnary works with 2 functions'
);
console.assert(
  composeManyUnary(double, add1, add2)(0) === 6,
  'composeManyUnary works with 3 functions'
);
console.assert(
  composeManyReduce(double, add1)(0) === 2,
  'composeManyReduce works with 2 functions'
);
console.assert(
  composeManyReduce(double, add1, add2)(0) === 6,
  'composeManyReduce works with 3 functions'
);
