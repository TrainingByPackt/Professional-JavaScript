const start = Date.now();
setTimeout(() => {
  console.log(`I'm ${Date.now() - start}ms late.`);
}, 1000);

const secondTimer = setTimeout(() => {
  console.log(`I am ${Date.now() - start}ms late.`);
}, 3000);

setTimeout(() => {
  console.log(`Refreshing second timer at ${Date.now() - start}ms`);
  secondTimer.refresh();
}, 2000);

const thirdTimer = setTimeout(() => {
  console.log('I am never going to be executed.');
}, 5000);

setTimeout(() => {
  console.log(`Cancelling third timer at ${Date.now() - start}ms`);
  clearTimeout(thirdTimer);
}, 2000);
