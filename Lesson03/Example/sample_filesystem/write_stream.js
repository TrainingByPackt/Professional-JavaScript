const fs = require('fs');
const writable = fs.createWriteStream('todo.txt');

writable.on('finish', () => console.log("-- finish --"));
writable.on('close', () => console.log("-- close --"));

writable.write('- Buy milk\n');
writable.write('- Buy eggs\n');
writable.write('- Buy cheese\n');

writable.end();
