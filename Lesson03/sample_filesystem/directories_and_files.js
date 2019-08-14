const fs = require('fs');

const firstDirectory = 'first';
fs.mkdir(firstDirectory, (error) => {
  if (error != null) {
    console.error(`Error: ${error.message}`, error);
    return;
  }
  console.log(`Directory created: ${firstDirectory}`);
});

fs.writeFile(`${firstDirectory}/test.txt`, 'Some content', (error) => {
  console.assert(error == null, 'Error while creating file.', error);
});

const secondDirectory = 'second';
fs.mkdir(secondDirectory, (error) => {
  if (error != null) {
    console.error(`Error: ${error.message}`, error);
    return;
  }

  console.log(`Directory created: ${secondDirectory}`);
  const fileName = `${secondDirectory}/test.txt`;
  fs.writeFile(fileName, 'Some content', (fileError) => {
    if (fileError != null) {
      console.error(`Error: ${fileError.message}`, error);
      return;
    }

    console.log(`File created: ${fileName}`);
  });
});

const thirdDirectory = 'third';
fs.mkdirSync(thirdDirectory);
console.log(`Directory created: ${thirdDirectory}`);

const thirdFile = `${thirdDirectory}/test.txt`;
fs.writeFileSync(thirdFile, 'Some content');
console.log(`File created: ${thirdFile}`);
