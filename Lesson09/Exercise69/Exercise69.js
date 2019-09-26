const fs = require('fs');

fs.writeFile('test.txt', 'Hello world', (error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('Write complete');
});

// After running above code:
fs.readFile('test.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
    }
    console.log(data);
});

// Read from no file
fs.readFile('nofile.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
    }
    console.log(data);
});

// Readfile promisified
function readFile(file, options) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, options, (error, data) => {
            if (error) {
                return reject(error);
            }
            resolve(data);
        })
    })
}

// New usage after Node 10
const fsPromises = require('fs').promises;
fsPromises.readFile('test.txt', 'utf-8').then(console.log);

fsPromises.stat('test.txt').then(console.log);
