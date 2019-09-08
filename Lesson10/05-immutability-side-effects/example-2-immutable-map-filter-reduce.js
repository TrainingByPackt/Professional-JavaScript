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

checkNoMutation();

assert.deepStrictEqual(
  initial.map(item => item.name),
  ['Shampoo', 'Soap'],
  'demo map'
);
checkNoMutation();

assert(
  initial.map(item => item.count).reduce((acc, curr) => acc + curr) === 3,
  'demo map reduce'
);
checkNoMutation();

assert.deepStrictEqual(
  initial.filter(item => item.count > 1),
  [{count: 2, name: 'Soap'}],
  'demo filter'
);
checkNoMutation();
