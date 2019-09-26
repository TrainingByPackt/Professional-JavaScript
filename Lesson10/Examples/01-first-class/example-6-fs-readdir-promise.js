// Works in Node 10+
const fs = require('fs').promises;

fs.readdir('.')
  .then(data => {
    console.assert(Boolean(data));
  })
  .catch(() => {
    // Shouldn't error
    console.assert(false);
  });

fs.readdir('/tmp/nonexistent')
  .then(() => {
    // Should error
    console.assert(false);
  })
  .catch(error => {
    // Should error
    console.assert(Boolean(error));
  });
