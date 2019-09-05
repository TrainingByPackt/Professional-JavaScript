const sum = (x, y) => x + y;
const sumCurried = x => y => x + y;

const add1Bind = sum.bind(null, 1);
const add1Curried = sumCurried(1);

console.assert(
  add1Bind(2) === add1Curried(2),
  'curried and bound versions behave the same'
);

console.assert(add1Bind(2) === 3, 'bound version behaves correctly');

console.assert(add1Curried(2) === 3, 'curried version behaves correctly');
