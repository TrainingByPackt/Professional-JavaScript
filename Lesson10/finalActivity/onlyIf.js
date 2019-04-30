// onlyIf.js
module.exports = (test, then) => item => {
  if (test(item)) {
    then(item)
  }
  return item
}
