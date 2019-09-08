const micro = require('micro');

const server = micro(async () => {
  return '<p>Hello micro!</p>Run this with <code>node example-2-micro-hello.js</code>';
});

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
