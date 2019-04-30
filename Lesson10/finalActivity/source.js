// source.js
const EventEmitter = require('events')
const addProps = require('./addProps')

const EVENT_NAME = 'onItem'

const emit = emitter => item => {
  emitter.emit(EVENT_NAME, item)
  return item
}

const listen = emitter => listener => emitter.addListener(EVENT_NAME, listener)
const nbListeners = emitter => () => emitter.listenerCount(EVENT_NAME)
const clear = emitter => () => emitter.removeAllListeners()

const methods = [emit, listen, nbListeners, clear]

// attaches all methods to a new object
const props = emitter => () =>
  methods.reduce(
    (acc, method) => ({
      ...acc,
      [method.name]: method(emitter)
    }),
    {}
  )

module.exports = (emitter = new EventEmitter()) => addProps(props(emitter))({})
