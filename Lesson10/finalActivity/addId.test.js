// addId.test.js
const addId = require('./addId')

test('add an Id', () => {
  expect(addId({})).toEqual({ id: 0 })
  expect(addId({})).toEqual({ id: 1 })
})
