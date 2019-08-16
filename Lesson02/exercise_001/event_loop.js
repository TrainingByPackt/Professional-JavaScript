console.log('First');

const start = Date.now();
setTimeout(() => {
  console.log(`Last, after: ${Date.now() - start}ms`);
}, 100);

console.log('Second');
