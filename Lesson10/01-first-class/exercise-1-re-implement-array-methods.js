function includes(array, needle) {
  return array.some(el => el === needle);
}

function indexOf(array, needle) {
  return array.findIndex(el => el === needle);
}

function join(array, delimiter) {
  return array.reduce((acc, curr) => acc + delimiter + curr);
}

console.assert(includes(['a', 'b', 'c'], 'c'));
console.assert(!includes(['a', 'b', 'c'], 'd'));

console.assert(indexOf([1, 2, 3], 2) === 1);
console.assert(indexOf([1, 2, 3], 10) === -1);

console.assert(join(['a', 'b', 'c'], '') === 'abc');
console.assert(join([1, 2, 3], ',') === '1,2,3');
