const math = require('./../src/math.js');

test('Check that square of 5 is 25', () => {
  expect(math.square(5)).toBe(25);
});

test('check that square of result from 1 + 1 is 4', () => {
  const start = new Date();
  expect(math.square(math.add(1,1))).toBe(4);
  expect(new Date() - start).toBeLessThan(5000);
});

test('check that square of result from 1 - 1 is 0', () => {
  expect(math.square(math.subtract(1,1))).toBe(0);
});

test('check that square of result from 1 + 1 is 4', () => {
  expect(math.subtract(math.cube(5), 5)).toBe(120);
});
