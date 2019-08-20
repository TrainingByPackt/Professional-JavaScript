const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
  console.log('Request received.', request.url);
  response.writeHead(200, { 'Content-type': 'text/plain' });
  response.write('Hello world!');
  response.end();
});

const port = 3000;
console.log('Starting server on port %d.', port);
console.log('Go to: http://localhost:%d', port);
server.listen(port);
