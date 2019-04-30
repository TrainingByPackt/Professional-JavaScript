const crypto = require('crypto')

const generateRandomKey = () =>
  Buffer.from([Math.random(), Date.now()].join('.')).toString('base64')

const hashPassword = (clear, generateKey = generateRandomKey) => {
  const key = generateKey()
  const hash = crypto
    .createHmac('sha256', key)
    .update(clear)
    .digest('base64')
  return { key, hash }
}

const checkPassword = (clear, key, hash) =>
  hashPassword(clear, () => key).hash === hash

// --- test
const FIXED_KEY = 'fixed_key'
const EXPECTED_HASH = 'xqbJg5NtHvPdobBpWrGRM+AynB2TQHpyXnNikeFmI5Q='

const hashResult = hashPassword('my_s3cr3t', () => FIXED_KEY)
console.assert(hashResult.key === FIXED_KEY)
console.assert(hashResult.hash === EXPECTED_HASH)
console.assert(checkPassword('my_s3cr3t', FIXED_KEY, EXPECTED_HASH))
console.assert(!checkPassword('wrong_s3cr3t', FIXED_KEY, EXPECTED_HASH))
