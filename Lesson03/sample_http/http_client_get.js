const http = require('http');

const request = http.get('http://httpbin.org/get', (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  });
});

request.end();
