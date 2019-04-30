// createPerson.js
const faker = require('faker')

module.exports = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  jobArea: faker.name.jobArea(),
  sex: Math.random() > 0.5 ? 'boy' : 'girl',
  birthday: faker.date.past(50),
  address: faker.helpers.userCard().address
})
