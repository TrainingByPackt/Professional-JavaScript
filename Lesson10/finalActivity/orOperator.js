// orOperator.js
const source = require('./source')
const onlyIf = require('./onlyIf')

const ifAny = (tests, then) =>
  onlyIf(item => tests.reduce((acc, test) => acc || test(item), false), then)

module.exports = (...tests) => parent => {
  const src = source()
  parent.listen(ifAny(tests, src.emit))
  return { ...src, parent }
}
