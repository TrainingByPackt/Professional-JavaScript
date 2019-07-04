let planet = 'Earth';
let sentence = `We are on the planet ${planet}`;
console.log(sentence);

console.log(sentence.split(' '));

sentence = sentence.replace('Earth', 'Venus');
console.log(sentence);
console.log(sentence.includes('Mars'));
sentence.toUpperCase();
sentence.toLowerCase();
sentence.charAt(0); // returns W
console.log(sentence.length);

let news = 'Today is August 31, 2008, the US president was George W. Bush';

let datePattern = /[a-z]+ [0-9]{1,2}, [0-9]{4}/i;

console.log(news.match(datePattern));
console.log(datePattern.test(news));