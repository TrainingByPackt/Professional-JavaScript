const fs = require('fs');

fs.readdir('.', (err, data) => {
  // Shouldn't error
  console.assert(Boolean(data));
  console.assert(!err);
});

fs.readdir('/tmp/nonexistent', (err, data) => {
  // Should error
  console.assert(!data);
  console.assert(Boolean(err));
});
