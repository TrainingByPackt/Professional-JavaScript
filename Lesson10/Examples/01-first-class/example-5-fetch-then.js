const fetch = require('node-fetch');
// This works in Node but despite Fetch
// being a browser API, google.com won't work
// since cross-origin resource sharing isn't enabled

fetch('https://google.com')
  .then(response => {
    console.assert(response.ok);
  })
  .catch(error => {
    // Shouldn't error
    console.assert(false);
    console.error(error.stack);
  });
