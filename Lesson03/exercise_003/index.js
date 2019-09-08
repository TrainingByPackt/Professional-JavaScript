const fs = require('fs');
const http = require('http');
const mime = require('mime');
const path = require('path');
const url = require('url');

function walkDirectory(dirPath, callback) {
  const dirents = fs.readdirSync(dirPath, { withFileTypes: true });

  dirents.forEach(dirent => {
    if (dirent.isDirectory()) {
      walkDirectory(path.join(dirPath, dirent.name), callback);
    } else {
      callback(path.join(dirPath, dirent.name));
    }
  });
}

const rootDirectory = path.resolve(process.argv[2] || './');

const files = new Set();
walkDirectory(rootDirectory, (file) => {
  file = file.substr(rootDirectory.length);
  files.add(file);
});
console.log(`Found ${files.size} in '${rootDirectory}'...`);

const server = http.createServer();
server.on('request', (request, response) => {
  const requestUrl = url.parse(request.url);
  const requestedPath = path.join(requestUrl.pathname);
  
  if (!files.has(requestedPath)) {
    console.log('404 %s', requestUrl.href);
    response.writeHead(404);
    response.end();
    return;
  }

  const contentType = mime.getType(path.extname(requestedPath));

  console.log('200 %s', requestUrl.href);
  response.writeHead(200, { 'Content-type': contentType });
  fs.createReadStream(path.join(rootDirectory, requestedPath))
    .pipe(response);
});

const port = 3000;
console.log('Starting server on port %d.', port);
console.log('Go to: http://localhost:%d', port);
server.listen(port);
