const http = require('https');
const JSDOM = require('jsdom').JSDOM;
const url = require('url');

function downloadPage(urlToDownload, callback) {
  const request = http.get(urlToDownload, (response) => {
    if (response.statusCode != 200) {
      console.error('Error while downloading page %s.', urlToDownload);
      console.error('Response was: %s %s', response.statusCode, response.statusMessage);
      return;
    }

    let content = '';
    response.on('data', (chunk) => content += chunk.toString());
    response.on('close', () => callback(content));
  });
  request.end();
}

downloadPage('https://medium.com/topic/javascript', (content) => {
  const document = new JSDOM(content).window.document;

  Array.from(document.querySelectorAll('a'))
    .map((el) => el.text)
    .filter(s => s.trim() != '')
    .forEach((s) => console.log(s));
});
