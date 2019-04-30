// compose.test.js
const compose = require('./compose')

test('compose functions', () => {
  const increment = x => x + 1
  const decrement = x => x - 1
  const divide = x => y => y / x
  const composeFn = compose(increment, divide(2), decrement)
  expect(composeFn(9)).toBe(5)
})
