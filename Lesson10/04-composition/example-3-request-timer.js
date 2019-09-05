const micro = require('micro');

const hello = () =>
  '<p>Hello micro!</p>Run this with <code>node example-3-request-timer.js</code>';

const timer = fn => async (req, res) => {
  console.time('request');
  const value = await fn(req, res);
  console.timeEnd('request');
  return value;
};

const server = micro(timer(hello));

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
