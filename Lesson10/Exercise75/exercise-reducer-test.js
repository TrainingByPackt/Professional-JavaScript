// Node.js built-in
const assert = require('assert').strict;

// DefaultState + other action handlers removed for simplicity
const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        basket: {
          items: state.basket.items.concat(action.newProduct)
        }
      };
    default:
      return state;
  }
};

function test() {
  const expected = {
    basket: {
      items: [
        {
          price: 499,
          name: 'Biscuits',
          quantity: 1
        }
      ]
    }
  };
  const actual = appReducer(
    {
      basket: {items: []}
    },
    {
      type: 'ADD_PRODUCT',
      newProduct: {
        price: 499,
        name: 'Biscuits',
        quantity: 1
      }
    }
  );
  assert.deepStrictEqual(actual, expected);
}

test();
