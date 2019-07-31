const program = require('commander');

program.version('0.1.0')
  .option('-b, --add-bootstrap', 'Add Bootstrap 4 to the page.')
  .option('-c, --add-container', 'Adds a div with container id in the body.')
  .option('-t, --title [title]', 'Add a title to the page.')
  .parse(process.argv);

let html = '<html><head>';

if (program.title) {
  html += `<title>${program.title}</title>`;
}

if (program.addBootstrap) {
  html += '<link';
  html += ' rel="stylesheet"';
  html += ' href="https://stackpath.bootstrapcdn.com';
  html += '/bootstrap/4.3.1/css/bootstrap.min.css"';
  html += '/>';
}

html += '</head><body>';

if (program.addContainer) {
  html += '<div id="container"></div>';
}

html += '</body></html>';
console.log(html);
