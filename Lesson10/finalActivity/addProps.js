// addProps.js
const map = require('./map')
module.exports = props => map(obj => ({ ...obj, ...props(obj) }))
