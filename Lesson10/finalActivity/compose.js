// compose.js
module.exports = (...fns) =>
  fns.reduce((acc, f) => (...args) => acc(f(...args)))
