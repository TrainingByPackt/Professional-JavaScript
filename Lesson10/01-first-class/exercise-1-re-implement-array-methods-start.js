function includes(array, needle) {
  // Includes implementation
}

function indexOf(array, needle) {
  // IndexOf implementation
}

function join(array, delimiter) {
  // Join implementation
}

console.assert(includes(['a', 'b', 'c'], 'c'));
console.assert(!includes(['a', 'b', 'c'], 'd'));

console.assert(indexOf([1, 2, 3], 2) === 1);
console.assert(indexOf([1, 2, 3], 10) === -1);

console.assert(join(['a', 'b', 'c'], '') === 'abc');
console.assert(join([1, 2, 3], ',') === '1,2,3');
