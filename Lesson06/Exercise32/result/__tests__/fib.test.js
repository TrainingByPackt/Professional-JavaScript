const fastFib = require('./../fastFib');
const slowFib = require('./../slowFib');

test('Fast way of getting Fibonacci of 44', () => {
  const start = new Date();
  expect(fastFib(44)).toBe(701408733);
  expect(new Date() - start).toBeLessThan(5000);
});

test('Timer - Slow way of getting Fibonacci of 44', () => {
  const start = new Date();
  expect(slowFib(44)).toBe(701408733);
  expect(new Date() - start).toBeLessThan(5000);
});
