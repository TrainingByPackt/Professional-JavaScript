const fs = require('fs');
const http = require('http');
const JSDOM = require('jsdom').JSDOM;

function extractProducts(document) {
  const products = [];
  console.log('Parsing product data...');
  Array.from(document.getElementsByClassName('item'))
    .forEach((el) => {
      process.stdout.write('.');
      const priceAndUnitElement = el.getElementsByTagName('span')[0];
      const priceAndUnit = priceAndUnitElement.textContent.split("/");

      const price = priceAndUnit[0].trim().substr(1);
      const unit = priceAndUnit[1].trim();

      const name = el.getElementsByTagName('a')[0].textContent;

      products.push({ name, price: parseFloat(price), unit });
    });
  console.log();
  console.log(`Found ${products.length} products.`);
  return products;
}

function writeCSV(products) {
  const fileName = 'products.csv';

  console.log(`Writing data to ${fileName}...`);
  fs.open(fileName, 'w', (error, fileDescriptor) => {
    if (error != null) {
      console.error(`Can not write to file: ${fileName}`, error);
      return;
    }

    // Write header
    fs.writeSync(fileDescriptor, 'name,price,unit\n');

    // Write content
    products.forEach((product) => {
      const line = `${product.name},${product.price},${product.unit}\n`;
      fs.writeSync(fileDescriptor, line);
    });
    console.log('Done.');
  });
}

const page = 'http://localhost:3000';
console.log(`Downloading ${page}...`);
const request = http.get(page, (response) => {
  if (response.statusCode != 200) {
    console.error(`Error while fetching page ${page}: ${response.statusCode}`);
    console.error(`Status message: ${response.statusMessage}`);
    return;
  }

  let content = '';
  response.on('data', (chunk) => content += chunk.toString());
  response.on('close', () => {
    console.log('Download finished.');
    const document = new JSDOM(content).window.document;
    writeCSV(extractProducts(document));
  });
});

request.end();
