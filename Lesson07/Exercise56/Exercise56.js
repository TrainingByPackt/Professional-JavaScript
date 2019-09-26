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
