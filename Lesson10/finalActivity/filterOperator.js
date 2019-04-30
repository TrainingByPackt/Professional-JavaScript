// filterOperator.js
const source = require('./source')
const onlyIf = require('./onlyIf')

module.exports = test => parent => {
  const src = source()
  parent.listen(onlyIf(test, src.emit))
  return { ...src, parent }
}
