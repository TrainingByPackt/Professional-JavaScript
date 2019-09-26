const fs = require('fs');
const globToRegExp = require('glob-to-regexp');
const join = require('path').join;
const program = require('commander');

let counter = 0;
let found = 0;
const start = Date.now();

program.version('1.0.0')
  .arguments('<glob>')
  .option('-b, --base-dir <dir>', 'Base directory to start the search.', './')
  .parse(process.argv);

function walkDirectory(path, callback) {
  const dirents = fs.readdirSync(path, { withFileTypes: true });

  dirents.forEach(dirent => {
    if (dirent.isDirectory()) {
      walkDirectory(join(path, dirent.name), callback);
    } else {
      counter++;
      callback(join(path, dirent.name));
    }
  });
}

const glob = program.args[0];
if (typeof glob === 'undefined') {
  program.help();
  process.exit(-1);
}

const matcher = globToRegExp(program.args[0], { globstar: true });
walkDirectory(program.baseDir, (f) => {
  if (matcher.test(f)) {
    found++;
    console.log(`${found} - ${f}`);
  }
});

console.log('-- Done --');
console.log(`Found ${found} files`);
console.log(`Searched ${counter} files in ${Date.now() - start}ms`);
