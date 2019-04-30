// setupTests.js
jest.mock('./uuid')

// wait that received has len length
global.waitLength = (received, len, cbk) =>
  (function checkLength () {
    received.length < len ? setImmediate(checkLength) : cbk()
  })()
