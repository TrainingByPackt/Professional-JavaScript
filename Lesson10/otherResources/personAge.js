const getAgeFromDate = date =>
  Math.floor((Date.now() - date.getTime()) / 3.154e10)

const getPersonAge = person => getAgeFromDate(new Date(person.birthday))

console.assert(getPersonAge({ name: 'brice', birthday: '1988/09/27' }) === 30)
