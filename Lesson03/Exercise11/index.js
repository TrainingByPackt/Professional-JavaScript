// Constants to calculate the interval based on time unit
const timeUnits = ['Seconds', 'Minutes', 'Hours'];
const multipliers = [1000, 60 * 1000, 3600 * 1000];

// Variables that will store the application state
let amount = null;
let message = null;
let timeUnit = null;

// Alias to print to console
const write = process.stdout.write.bind(process.stdout);

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
  const unit = timeUnits[timeUnit];
  write(`Setting reminder: '${message}' in ${amount} ${unit} from now.\n`);

  let timerMessage = `\n\x07Time to '${currentMessage}'\n> `;
  setTimeout(() => write(timerMessage), amount * multipliers[timeUnit]);

  amount = message = timeUnit = null;
  askForMessage();
}

function processInput(input) {
  // Phase 1 - Collect message
  if (message == null) {
    askForMessage(input);
    input = null;
  }

  // Phase 2 - Collect time unit
  if (message != null && timeUnit == null) {
    askForTimeUnit(input);
    input = null;
  }

  // Phase 3 - Collect amount of time
  if (timeUnit != null && amount == null) {
    askForAmount(input);
  }
}

process.stdin.on('data', (data) => processInput(data.toString().trim()));
askForMessage();
