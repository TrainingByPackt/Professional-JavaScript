const fs = require('fs');

const filename = process.argv[2];

fs.access(filename, fs.constants.F_OK | fs.constants.R_OK, (error) => {
  if (error == null) {
    console.log('File exists and is readable');
  } else {
    console.log(error.message);
  }
});

fs.lstat(filename, (statError, stat) => {
  if (statError != null) {
    console.error('Error while file status.', statError);
    return;
  }

  console.log(`Is file: ${stat.isFile()}`);
  console.log(`Is directory: ${stat.isDirectory()}`);
  console.log(`Created at: ${stat.birthtime}`);
  console.log(`Last modified at: ${stat.mtime}`);
});
