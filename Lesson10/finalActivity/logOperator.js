// logOperator.js
const peekOperator = require('./peekOperator')
const operator = peekOperator(str => console.log('Log:', str))
module.exports = () => operator
