const readline = require('readline')

const sayHello = name => `Hello ${name}!`

const promptFromConsole = (text, cbk) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question(text, answer => {
    cbk(answer)
    rl.close()
  })
}

promptFromConsole('What is your name? ', name => console.log(sayHello(name)))
