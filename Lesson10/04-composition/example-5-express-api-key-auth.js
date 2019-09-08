const express = require('express');

const app = express();

const responseText = `
Hello authenticated Express!

Run this with node example-5-express-api-key-auth.js

## Test requests

Try the following:
  - curl http://localhost:3000 -H 'Authorization: ApiKey api-key-1' -I  which should 200</li>
  - curl http://localhost:3000 -H 'Authorization: ApiKey bad-key' -I which should 401</li>
  - curl http://localhost:3000 -H 'Authorization: Bearer bearer-token' -I  which should 401</li>
  - curl http://localhost:3000 -I which should 401
`;

const timerStart = (req, res, next) => {
  const timerName = `request_${(Math.random() * 100).toFixed(2)}`;
  console.time(timerName);
  req.on('end', () => {
    console.timeEnd(timerName);
  });
  next();
};

const ALLOWED_API_KEYS = new Set(['api-key-1', 'key-2-for-api']);
const authenticate = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization && authorization.startsWith('ApiKey')) {
    const apiKey = authorization.replace('ApiKey', '').trim();
    if (ALLOWED_API_KEYS.has(apiKey)) {
      return next();
    }
  }

  return res.status(401).send(`Unauthorized: <pre>${responseText}</pre>`);
};

const requestHandler = (req, res) => {
  return res.send(responseText);
};

app.use(timerStart, authenticate, requestHandler);

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
