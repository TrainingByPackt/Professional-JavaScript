// functionSource.js
const source = require('./source')
const addProps = require('./addProps')
const compose = require('./compose')

module.exports = (generateItem, interval = 100) => {
  const src = source()
  const emitItem = compose(src.emit, generateItem)
  // internal mutations here for the interval context
  let ctx = null
  const clearCtx = () => clearInterval(ctx)
  const start = () => (ctx = setInterval(emitItem, interval))
  const stop = compose(clearCtx, src.clear)
  // -- end of mutations
  return {
    ...src,
    start,
    stop,
    interval
  }
}
