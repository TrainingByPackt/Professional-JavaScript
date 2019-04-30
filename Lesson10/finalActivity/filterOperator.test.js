// filterOperator.test.js
const uuid = require('./uuid')
const functionSource = require('./functionSource')
const filterOperator = require('./filterOperator')

test('filter a source', done => {
  const isEven = item => item % 2 === 0
  const src = functionSource(uuid, 10)
  const filtered = filterOperator(isEven)(src)
  const received = []
  filtered.listen(item => received.push(item))
  src.start()
  waitLength(received, 4, () => {
    src.stop()
    filtered.clear()
    expect(received).toEqual([0, 2, 4, 6])
    done()
  })
})
