const identity = v => v

// wraps a function a log some informations on call
const createVisitor = ({ verbose = true } = {}) => desc => {
  return fn => (...args) => {
    const result = fn(...args)
    if (verbose) {
      const log = [desc, '\tArguments:', ...args]
      if (typeof result !== 'function') {
        log.push('\tResult:', result)
      }
      console.log.apply(null, log)
    }
    return result
  }
}

// our app function visitor
const visit = createVisitor()

// calculates a work entry (hours and rate)
const entryCalculator = visit('create calculator')(
  // parameterizable: we can map each terms, and the final result
  ({ mapRate = identity, mapHours = identity, mapAll = Math.trunc } = {}) =>
    visit('calculate entry')(({ rate, hours }) =>
      mapAll(mapRate(rate) * mapHours(hours))
    )
)

// default implementation for juniors
const juniorCalculator = entryCalculator()

// seniors have a higher rate
const seniorCalculator = entryCalculator({ mapRate: rate => rate * 1.2 })

// calculation implementations
const strategies = {
  junior: juniorCalculator,
  senior: seniorCalculator,
  default: juniorCalculator
}

// selects a calculator impl. based of the level
const basicCalculatorSelector = level => strategies[level] || strategies.default

const calculateSalary = (entries, selectedCalculator) =>
  entries.reduce((salary, entry) => {
    const calculator = selectedCalculator(entry.level)
    return salary + calculator(entry)
  }, 0)

const entries = [
  { level: 'junior', rate: 31.75, hours: 3.5 },
  { level: 'junior', rate: 31.75, hours: 4.2 },
  { level: 'senior', rate: 38.55, hours: 2.7 }
]

const salary = calculateSalary(entries, basicCalculatorSelector)
console.log('salary:', salary)
