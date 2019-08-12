const timeUnits = ['Seconds', 'Minutes', 'Hours'];
const multipliers = [1000, 60 * 1000, 3600 * 1000];

const write = process.stdout.write.bind(process.stdout);

let amount = null;
let message = null;
let timeUnit = null;

function askForAmount(input) {
  if (input == null) {
    write(`In how many ${timeUnits[timeUnit]}? > `);
    return;
  }

  const number = parseInt(input, 10);
  if (isNaN(number)) {
    write(`Sorry, '${input}' is not valid. Try again. > `);
    return;
  }

  amount = number;
  setTimerAndRestart();
}

function askForMessage(input) {
  if (input == null) {
    write('What do you want to be reminded of? > ');
    return;
  }

  if (input.length == 0) {
    write('Message can not be empty. Please try again. > ');
    return;
  }

  message = input;
}

function askForTimeUnit(input) {
  if (input == null) {
    console.log('What unit?');
    timeUnits.forEach((unit, index) => console.log(`${index + 1} - ${unit}`) );
    write('> ');
    return;
  }

  const index = parseInt(input, 10);
  if (isNaN(index) || index <= 0 || index > timeUnits.length) {
    write(`Sorry, '${input}' is not valid. Please try again. > `);
    return;
  }

  timeUnit = index - 1;
  console.log(`Picked: ${timeUnits[timeUnit]}`);
}

function setTimerAndRestart() {
  const currentMessage = message;
  console.log(`Setting a reminder for '${message}' in ${amount} ${timeUnits[timeUnit]} from now.`);
  setTimeout(() => write(`\n\x07Time for '${currentMessage}'\n> `), amount * multipliers[timeUnit]);

  amount = message = timeUnit = null;
  askForMessage();
}

function processInput(input) {
  if (message == null) {
    askForMessage(input);
    input = null;
  }

  if (message != null && timeUnit == null) {
    askForTimeUnit(input);
    input = null;
  }

  if (timeUnit != null && amount == null) {
    askForAmount(input);
  }
}

process.stdin.on('data', (data) => processInput(data.toString().trim()));
processInput();
