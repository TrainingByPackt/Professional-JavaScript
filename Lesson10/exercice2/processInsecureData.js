const Optional = require('optional-js')
const faker = require('faker')

const isEven = x => x % 2 === 0
const ascSort = (n1, n2) => n1 - n2

const paritionByType = (acc, value) => {
  const type = typeof value
  const partition = [...(acc[type] || []), value]
  return {
    ...acc,
    [type]: partition
  }
}

const randomValue = () => {
  if (Math.random() < 0.2) {
    return null
  }
  if (Math.random() < 0.2) {
    return Math.random() < 0.5
  }
  const n = Math.ceil(Math.random() * 100)
  if (Math.random() > 0.8) {
    return faker.name.firstName()
  }
  return n
}

const process = values =>
  Optional.of(
    values
      .map(Optional.ofNullable) // map n to Optional<n>
      .filter(opt => opt.isPresent()) // filter null values
      .map(opt => opt.get()) // back from Optional<n> to n
      .reduce(paritionByType, {}) // call our partition function
  )
    .map(values => ({
      ...values,
      number: values.number.filter(isEven).sort(ascSort)
    }))
    .get()

// const values = new Array(25).fill(0).map(randomValue)
// console.log(values)
console.log(
  process([66, true, 'John', null, 97, 8, null, true, 20, 'Phil', true, null])
)
