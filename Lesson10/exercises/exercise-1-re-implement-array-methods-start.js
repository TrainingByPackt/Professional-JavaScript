function includes(array, needle) {
  // Includes implementation
}

function indexOf(array, needle) {
  // IndexOf implementation
}

function join(array, delimiter = '') {
  // Join implementation
}

console.assert(
  includes(['a', 'b', 'c'], 'c') === true,
  'includes should return true if value is in array'
);
console.assert(
  includes(['a', 'b', 'c'], 'd') === false,
  'includes should return false if value is in array'
);

console.assert(
  indexOf([1, 2, 3], 2) === 1,
  'indexOf should return the index if value in array'
);
console.assert(
  indexOf([1, 2, 3], 10) === -1,
  'indexOf should return -1 if value not in array'
);

console.assert(
  join(['a', 'b', 'c']) === 'abc',
  'join should work with no delimiter passed'
);
console.assert(
  join([1, 2, 3], ',') === '1,2,3',
  'join should work with comma delimiter'
);
