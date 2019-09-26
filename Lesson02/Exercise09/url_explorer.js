const url = new URL('https://www.someserver.com/not/a/path?param1=value1&param2=value2');
console.log(`URL is: ${url.href}`);
console.log(`Hostname: ${url.hostname}`);
console.log(`Path: ${url.pathname}`);

console.log(`Query string is: ${url.search}`);
console.log('Query parameters:')
Array.from(url.searchParams.entries())
  .forEach((entry) => console.log(`\t- ${entry[0]} = ${entry[1]}`));
