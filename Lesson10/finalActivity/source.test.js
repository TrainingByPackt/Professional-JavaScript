// source.test.js
const source = require('./source')

test('creates a new source', () => {
  const src = source()
  expect(src.nbListeners()).toBe(0)
  const received = []
  src.listen(item => received.push(item))
  expect(src.nbListeners()).toBe(1)
  src.emit('a')
  src.emit('b')
  src.clear()
  expect(src.nbListeners()).toBe(0)
  src.emit('c')
  expect(received).toEqual(['a', 'b'])
})
