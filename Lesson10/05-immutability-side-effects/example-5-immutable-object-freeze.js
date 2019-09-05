// Node.js built-in
const assert = require('assert').strict;

const myProduct = Object.freeze({
  name: 'Special Sauce',
  price: 1999
});

console.assert(myProduct.name === 'Special Sauce', 'no change to properties');
console.assert(myProduct.price === 1999, 'no change to properties');

assert.throws(() => {
  'use strict';
  myProduct.category = 'condiments';
}, 'writing to an existing property is an error in strict mode');

assert.doesNotThrow(() => {
  myProduct.category = 'condiments';
}, 'writing to an existing property is fine in non strict mode');

assert.throws(() => {
  'use strict';
  myProduct.name = 'Super Special Sauce';
}, 'writing a new property is an error in strict mode');

assert.doesNotThrow(() => {
  myProduct.name = 'Super Special Sauce';
}, 'writing a new property is fine in non strict mode');
