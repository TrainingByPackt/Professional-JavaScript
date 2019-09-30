const fs = require('fs');

const filename = process.argv[2];
const copyTo = process.argv[3] || 'copy.txt';

function handleError(error) {
  console.error(`Error while copying ${filename} to ${copyTo}: ${error.message}`);
}

const fileToCopy = fs.createReadStream(filename);
fileToCopy.on('error', handleError);

const fileToWrite = fs.createWriteStream(copyTo);
fileToWrite.on('error', handleError);

fileToCopy.pipe(fileToWrite);
