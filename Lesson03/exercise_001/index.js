const readlineSync = require('readline-sync');

const timeUnits = ['Seconds', 'Minutes', 'Hours'];
const multipliers = [1000, 60 * 1000, 3600 * 000];

function addTimer() {
  const id = readlineSync.question('What do you want to be reminded of? ');
  const timeUnit = readlineSync.keyInSelect(timeUnits, 'What unit? ', { cancel: false });
  const userTime = readlineSync.question(
    `In how many ${timeUnits[timeUnit]}? `,
    { limit: /\d+/, limitMessage: 'Only numbers, please.' }
  );

  setTimeout(() => {
    process.stderr.write('\x07');
    console.log(`Time for: ${id}`);
    whatNext();
  }, userTime * multipliers[timeUnit])
  
  console.log(`Added '${id}' in ${userTime} ${timeUnits[timeUnit]}`);
}

function whatNext() {
  const options = ['Add'];
  const answer = readlineSync.keyInSelect(options, 'What do you want to do next?', { cancel: 'Exit' });
  if (answer < 0) {
    process.exit(0);
    return;
  }

  addTimer();
}

console.log('');
console.log('-- Welcome to Task Reminder! --');
addTimer();
