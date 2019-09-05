// Node.js built-in
const assert = require('assert').strict;

const initial = [
  {
    count: 1,
    name: 'Shampoo'
  },
  {
    count: 2,
    name: 'Soap'
  }
];

function checkNoMutation() {
  assert.deepStrictEqual(initial, [
    {
      count: 1,
      name: 'Shampoo'
    },
    {
      count: 2,
      name: 'Soap'
    }
  ]);
}

assert.deepStrictEqual(
  // Without the spread, reverse() mutates the array in-place
  [...initial].reverse(),
  [
    {
      count: 2,
      name: 'Soap'
    },
    {
      count: 1,
      name: 'Shampoo'
    }
  ],
  'demo of immutable reverse'
);

checkNoMutation();

assert.deepStrictEqual(
  [...new Set([1, 2, 1, 2])],
  [1, 2],
  'demo of spread on Sets'
);

const [first, ...rest] = initial;
assert.deepStrictEqual(first, {count: 1, name: 'Shampoo'});
assert.deepStrictEqual(rest, [
  {
    count: 2,
    name: 'Soap'
  }
]);
