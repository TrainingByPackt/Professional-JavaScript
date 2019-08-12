let counter = 0;
const MAX = 5;
const start = Date.now();
const timeout = setInterval(() => {
  console.log(`Executing ${Date.now() - start}ms in the future.`);
  counter++
  if (counter >= MAX) {
    console.log(`Ran for too long, cancelling it at ${Date.now() - start}ms`);
    clearInterval(timeout);
  }
}, 1000);