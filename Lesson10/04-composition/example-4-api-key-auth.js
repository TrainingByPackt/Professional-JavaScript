const micro = require('micro');

const {sendError, createError} = micro;

const responseText = `
Hello authenticated micro!

Run this with node example-4-api-key-auth.js

## Test requests

Try the following:
  - curl http://localhost:3000 -H 'Authorization: ApiKey api-key-1' -I  which should 200</li>
  - curl http://localhost:3000 -H 'Authorization: ApiKey bad-key' -I which should 401</li>
  - curl http://localhost:3000 -H 'Authorization: Bearer bearer-token' -I  which should 401</li>
  - curl http://localhost:3000 -I which should 401
`;
const handler = () => responseText;

const ALLOWED_API_KEYS = new Set(['api-key-1', 'key-2-for-api']);
const authenticate = fn => async (req, res) => {
  const {authorization} = req.headers;
  if (authorization && authorization.startsWith('ApiKey')) {
    const apiKey = authorization.replace('ApiKey', '').trim();
    if (ALLOWED_API_KEYS.has(apiKey)) {
      return fn(req, res);
    }
  }

  return sendError(
    req,
    res,
    createError(401, `Unauthorizsed: ${responseText}`)
  );
};

const timer = fn => async (req, res) => {
  console.time('request');
  const value = await fn(req, res);
  console.timeEnd('request');
  return value;
};

const server = micro(timer(authenticate(handler)));

server.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});
