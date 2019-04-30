// addId.js
const uuid = require('./uuid')
const addProps = require('./addProps')
const idProp = () => ({ id: uuid() })
module.exports = addProps(idProp)
