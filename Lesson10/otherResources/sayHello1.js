const readline = require('readline')

const sayHello = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('What is your name? ', answer => { // impure
    console.log(`Hello ${answer}!`)
    rl.close()
  })
}

sayHello()