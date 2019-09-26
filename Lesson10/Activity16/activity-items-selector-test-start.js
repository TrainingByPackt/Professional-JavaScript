// Node.js built-in
const assert = require('assert').strict;

const selectBasketItems = state =>
  (state && state.basket && state.basket.items) || [];

function test() {
  // Call selectBasketItems and add your assertion(s) here
  console.assert(false, 'test not implemented');
}

test();
