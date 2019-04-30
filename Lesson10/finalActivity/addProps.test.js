// addProps.test.js
const addProps = require('./addProps')

test('add props to an object', () => {
  const addAnswer = addProps(() => ({ answer: 42 }))
  expect(addAnswer({ a: 'a' })).toEqual({ a: 'a', answer: 42 })
})
