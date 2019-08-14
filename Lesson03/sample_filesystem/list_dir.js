const fs = require('fs');

fs.readdir('./', (error, files) => {
  if (error != null) {
    console.error('Error while reading directory.', error);
    return;
  }

  console.log('-- File names --');
  console.log(files.join('\n'));
});

fs.readdir('./', { withFileTypes: true }, (error, files) => {
  if (error != null) {
    console.error('Error while reading directory.', error);
    return;
  }

  console.log('-- File infos --');
  console.log(files.map(d => `(${d.isDirectory() ? 'D': 'F'}) ${d.name}`)
    .sort()
    .join('\n'));
});
