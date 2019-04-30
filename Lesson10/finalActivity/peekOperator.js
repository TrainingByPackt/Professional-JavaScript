// peekOperator.js
const source = require('./source')
const compose = require('./compose')

module.exports = call => parent => {
  const src = source()
  parent.listen(compose(call, src.emit))
  return { ...src, parent }
}
