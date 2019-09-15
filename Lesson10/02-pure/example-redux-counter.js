const {createStore} = require('redux');

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

console.assert(store.getState() === 0, 'initalises to 0');

store.dispatch({type: 'INCREMENT'});
console.assert(store.getState() === 1, 'incrementing works');

store.dispatch({type: 'DECREMENT'});
console.assert(store.getState() === 0, 'decrementing works');
