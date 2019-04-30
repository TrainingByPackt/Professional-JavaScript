// functionSource.test.js
const uuid = require('./uuid')
const functionSource = require('./functionSource')

test('create a function source', done => {
  const src = functionSource(uuid, 10)
  const received = []
  src.listen(item => received.push(item))
  src.start()
  waitLength(received, 4, () => {
    src.stop()
    expect(received).toEqual([0, 1, 2, 3])
    done()
  })
})
