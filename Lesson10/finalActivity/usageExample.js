// usageExample.js
const createPerson = require('./createPerson')
const functionSource = require('./functionSource')
const mapOperator = require('./mapOperator')
const filterOperator = require('./filterOperator')
const orOperator = require('./orOperator')
const logOperator = require('./logOperator')
const addProps = require('./addProps')
const compose = require('./compose')

const equals = expected => v => expected === v
const lte = x => y => y <= x
const pickAttr = attr => obj => obj[attr]
const pickAttrs = (...attrs) => obj =>
  attrs.reduce((acc, attr) => [...acc, obj[attr]], [])
const join = str => arr => arr.join(str)

const personAge = person => new Date().getYear() - person.birthday.getYear()
const setAge = addProps(person => ({ age: personAge(person) }))

const createName = compose(join(' '), pickAttrs('firstName', 'lastName'))
const setName = addProps(person => ({ name: createName(person) }))

const under42Ys = compose(lte(42), pickAttr('age'))
const girls = compose(equals('girl'), pickAttr('sex'))
const workInMarketing = compose(equals('Marketing'), pickAttr('jobArea'))

// girls or person who work in marketing
// and have under 42 years old
// with normalized age and name
const mainProcessFlow = compose(
  logOperator(),
  orOperator(girls, workInMarketing),
  filterOperator(under42Ys),
  // we can compose operators and reuse them
  compose(
    mapOperator(addProps(() => ({ normalized: true }))),
    mapOperator(setAge),
    mapOperator(setName)
  )
)

const src = functionSource(createPerson)
mainProcessFlow(src)
src.start()
