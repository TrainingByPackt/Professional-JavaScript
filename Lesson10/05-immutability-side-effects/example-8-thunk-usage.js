let globalState;

function thunk() {
  return () => {
    globalState = 'updated';
  };
}

const lazy = thunk();
console.assert(!globalState, 'executing the thunk does nothing');
lazy();
console.assert(
  globalState === 'updated',
  'executing the output of the thunk runs the update'
);
