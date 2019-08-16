process.stdout.write('Type something then press [ENTER]\n');
process.stdout.write('> ');

process.stdin.addListener('data', (data) => {
  const text = data.toString().trim();
  process.stdout.write(`You typed: '${text}'\n`);
  if (text == 'exit') {
    process.stderr.write('Exiting your application now.\n');
    process.exit(0);
  } else {
    process.stdout.write('> ');
  }
});
