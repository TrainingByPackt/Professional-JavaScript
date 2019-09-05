// Node.js built-in
const assert = require('assert').strict;

function mightThrow(shouldBeSet) {
  if (!shouldBeSet) {
    throw new Error("Doesn't work without shouldBeSet parameter");
  }

  return shouldBeSet;
}

function test() {
  assert.throws(mightThrow.bind(null), 'should throw on empty parameter');
  assert.doesNotThrow(
    mightThrow.bind(null, 'some-value'),
    'should not throw if not empty'
  );
  assert.deepStrictEqual(
    mightThrow('some-value'),
    'some-value',
    'should return input if set'
  );
}

test();
