let symbol1 = Symbol();
let symbol2 = Symbol('symbol');
console.log(symbol1 === symbol2);
console.log(symbol1 === Symbol('symbol'));
const testObj = {};
testObj.name = 'test object';
testObj.included = 'this will be included';
const symbolKey = Symbol();
testObj[symbolKey] = 'this will be hidden';

console.log(Object.keys(testObj));
console.log(testObj[Symbol()]); // Will return undefined
console.log(testObj[symbolKey]); // Will return our hidden property

const anotherSymbolKey = Symbol.for('key');
const copyOfAnotherSymbol = Symbol.for('key');
testObj[anotherSymbolKey] = 'another key';
console.log(testObj[copyOfAnotherSymbol]);
