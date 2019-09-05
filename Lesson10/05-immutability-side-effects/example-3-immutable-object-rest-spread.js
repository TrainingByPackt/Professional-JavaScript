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
  initial.map(item => {
    return {
      ...item,
      category: 'care'
    };
  }),
  [
    {
      category: 'care',
      count: 1,
      name: 'Shampoo'
    },
    {
      category: 'care',
      count: 2,
      name: 'Soap'
    }
  ],
  'demo of spread (creates copies)'
);

checkNoMutation();

assert.deepStrictEqual(
  initial.map(({name, ...rest}) => {
    return {
      ...rest,
      name: `${name.toLowerCase()}-care`
    };
  }),
  [
    {
      count: 1,
      name: 'shampoo-care'
    },
    {
      count: 2,
      name: 'soap-care'
    }
  ],
  'demo of rest in parameter + spread'
);
