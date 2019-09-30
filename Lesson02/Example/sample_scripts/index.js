const fs = require('fs');
const name = ('' + fs.readFileSync('name.txt')).trim();
console.log(`Hello ${name}!`);
