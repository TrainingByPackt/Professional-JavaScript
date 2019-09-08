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
  // Call appReducer and add your assertion(s) here
}

test();
