const compose = (...fns) => fns.reduce((acc, f) => (...args) => acc(f(...args)))

const increment = x => x + 1
const decrement = x => x - 1
const divide = x => y => y / x

// must be: decrement, divide and increment
const composed = compose(
  increment,
  divide(2),
  decrement
)
console.assert(composed(9) === 5) // 5, not 4, it works!
