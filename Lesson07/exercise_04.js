// 1
let singers = [];
// 2
singers.push({ name: 'miku', age: 16 });
// 3
singers[0].name = 'Hatsune Miku'
console.log(singers);
// 4
singers[0].birthday = 'August 31';
console.log(singers);
// 5
console.log(singers[0].name);
const propertyName = 'name';
console.log(singers[0][propertyName]);
// 6
let myConsole = { name: 'PS4', color: 'black', price: 499, library: []};
// 7
console.log(Object.keys(myConsole));
// 8
if (myConsole.ramSize) {
  console.log('ram size is defined.');
}
