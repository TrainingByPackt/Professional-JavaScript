// Node.js built-in
const assert = require('assert').strict;

const selectBasketItems = state =>
  (state && state.basket && state.basket.items) || [];

function test() {
  assert.deepStrictEqual(
    selectBasketItems(),
    [],
    'should be [] when selecting with no state'
  );
  assert.deepStrictEqual(
    selectBasketItems({}),
    [],
    'should be [] when selecting with {} state'
  );
  assert.deepStrictEqual(
    selectBasketItems({basket: {}}),
    [],
    'should be [] when selecting with {} state.basket'
  );
  assert.deepStrictEqual(
    selectBasketItems({basket: {items: []}}),
    [],
    'should be [] when items is []'
  );
  assert.deepStrictEqual(
    selectBasketItems({
      basket: {items: [{name: 'product-name'}]}
    }),
    [{name: 'product-name'}],
    'should be items when items is set'
  );
}

test();
