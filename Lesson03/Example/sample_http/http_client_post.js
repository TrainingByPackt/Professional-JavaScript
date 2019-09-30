const http = require('http');

const url = 'http://httpbin.org/post';
const options = {
  method: 'POST',
};

const request = http.request(url, options, (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  });
});

request.write('Hello world.');
request.end();
