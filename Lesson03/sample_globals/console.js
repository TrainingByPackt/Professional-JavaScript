console.debug('This will go to Standard Output');
console.info('This will also go to Standard Output');

console.warn('This will go to standard error');
console.error('Same  here');

const whatILike = 'cheese';
console.log('I like %s', whatILike);
console.log(`I like ${whatILike}`);

console.assert(1 == 1, 'One is equal to one');
console.assert(2 == 1, 'Oh no! One is not equal to two');

console.trace('You can easily find me.');

const myTable = [
  { name: 'John Doe', age: 10 },
  { name: 'Jane Doe', age: 17 },
];
console.table(myTable);
console.table(myTable, ['name']);

function blockFor2Seconds() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // loop for 2s
    const i = 0;
  }
}

console.time();
blockFor2Seconds();
console.timeEnd();

console.time('Outer');
console.time('Inner');
blockFor2Seconds();
console.timeEnd('Inner');
console.timeEnd('Outer');
