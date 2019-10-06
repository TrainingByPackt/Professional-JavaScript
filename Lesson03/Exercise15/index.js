const http = require('https');
const JSDOM = require('jsdom').JSDOM;
const url = require('url');

const topics = [
  'artificial-intelligence',
  'data-science',
  'javascript',
  'programming',
  'software-engineering',
];

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

function findArticles(document) {
  const articles = {};
  Array.from(document.querySelectorAll('h1 a, h3 a'))
    .filter(el => {
      const parsedUrl = url.parse(el.href);
      const split = parsedUrl.pathname.split('/').filter((s) => s.trim() != '');
      return split.length == 2;
    }).forEach(el => {
      let description = '[Description unnavailable]';
      if (el.parentNode && el.parentNode.nextSibling && el.parentNode.nextSibling.querySelector('p a, h3 a')) {
        description = el.parentNode.nextSibling.querySelector('p a, h3 a').text;
      }

      articles[el.text] = {
        description: description,
        link: url.parse(el.href).pathname,
        title: el.text,
      };
    });
  return articles;
}

function printArticle(article) {
  console.log('-----');
  console.log(` ${article.title}`);
  console.log(` ${article.description}`);
  console.log(` https://medium.com${article.link}`);
}

topics.forEach(topic => {
  downloadPage(`https://medium.com/topic/${topic}`, (content) => {
    const articles = findArticles(new JSDOM(content).window.document);
    Object.values(articles)
     .forEach(printArticle);
  });
});
