const fs = require('fs');

const readStream = fs.createReadStream(__filename);

readStream.on('data', (data) => console.log(`--data--\n${data}`));
readStream.on('ready', () => console.log(`--ready--`));
readStream.on('close', () => console.log(`--close--`));
