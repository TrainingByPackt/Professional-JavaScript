const cheerio = require('cheerio');

const html = `
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <p>This is a paragraph.</p>
    <div>
      <p>This is a paragraph inside a div.</p>
    </div>
    <button>Click me!</button>
  </body>
</html>
`;

const $ = cheerio.load(html);

$('div').append('<p>This is another paragraph.</p>');

$('p').each((index, p) => {
  console.log(`${index} - ${p.firstChild.data}`);
});

console.log($.html());
