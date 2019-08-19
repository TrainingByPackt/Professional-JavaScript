const fs = require('fs');
const handlebars = require('handlebars');
const http = require('http');
const mime = require('mime');
const path = require('path');
const url = require('url');

const staticDir = path.resolve('./static');
console.log(`Static resources from ${staticDir}`);

const data = fs.readFileSync('products.json');
const products = JSON.parse(data.toString());
console.log(`Loaded ${products.length} products...`);

handlebars.registerHelper('currency', (number) => number.toFixed(2));

function handleNotFound(response) {
  response.writeHead(404);
  response.end();
}

function handleProductsPage(requestUrl, response) {
  const template = handlebars.compile(fs.readFileSync('html/index.html').toString());

  response.writeHead(200);
  response.write(template({ products }));
  response.end();
}

function handleStaticFile(pathname, response) {
  // For security reasons, only serve files from static directory
  const fullPath = path.resolve(`static${pathname}`);
  if (!fullPath.startsWith(staticDir)) {
    return handleNotFound(response);
  }

  // Check if file exists and is readable
  fs.access(fullPath, fs.constants.R_OK, (error) => {
    if (error) {
      console.error(`File is not readable: ${fullPath}`, error);
      return handleNotFound(response);
    }

    const contentType = mime.getType(path.extname(fullPath));
    response.writeHead(200, { 'Content-type': contentType });
    fs.createReadStream(fullPath)
      .pipe(response);
  });
}

function handleRequest(request, response) {
  const requestUrl = url.parse(request.url);
  const pathname = requestUrl.pathname;
  
  switch(pathname) {
    case '/':
    case '/index.html':
      handleProductsPage(requestUrl, response);
      return;
    default:
      handleStaticFile(pathname, response);
      return;
  }
}

function initializeServer() {
  const server = http.createServer();
  server.on('request', handleRequest);

  const port = 3000;
  console.log('Go to: http://localhost:%d', port);
  server.listen(port);
}

initializeServer();
