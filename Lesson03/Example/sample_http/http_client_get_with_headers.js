const http = require('http');

const url = 'http://httpbin.org/get';
const options = {
  auth: 'myuser:mypass',
  headers: {
    Test: 'Some Value'
  }
};

const request = http.get(url, options, (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  });
});

request.end();
