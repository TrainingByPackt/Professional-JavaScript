// mapOperator.test.js
const uuid = require('./uuid')
const functionSource = require('./functionSource')
const mapOperator = require('./mapOperator')

test('map a source', done => {
  const double = x => x * 2
  const src = functionSource(uuid, 10)
  const mapped = mapOperator(double)(src)
  const received = []
  mapped.listen(item => received.push(item))
  src.start()
  waitLength(received, 4, () => {
    src.stop()
    mapped.clear()
    expect(received).toEqual([0, 2, 4, 6])
    done()
  })
})
