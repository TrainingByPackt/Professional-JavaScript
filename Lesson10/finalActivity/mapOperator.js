// mapOperator.js
const source = require('./source')
const compose = require('./compose')

module.exports = map => parent => {
  const src = source()
  parent.listen(compose(src.emit, map))
  return { ...src, parent }
}
