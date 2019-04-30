// map.test.js
const map = require('./map')
const compose = require('./compose')

test('map an object', () => {
  const addAnswer = map(obj => ({ ...obj, answer: 40 }))
  const incAnswer = map(obj => ({ ...obj, answer: obj.answer + 2 }))
  const transform = compose(incAnswer, addAnswer)
  expect(transform({})).toEqual({ answer: 42 })
})
