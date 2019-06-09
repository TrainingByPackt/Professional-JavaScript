const math = require('./../src/math.js');

test('Check that square of 5 is 25', () => {
  expect(math.square(5)).toBe(25);
});
