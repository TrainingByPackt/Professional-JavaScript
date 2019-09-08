const deepEqual = (arrA, arrB) => arrA.every((el, i) => el === arrB[i]);

console.assert(deepEqual([{id: '1'}, {id: '2'}].map(el => el.id), ['1', '2']));

console.assert(deepEqual([1, 2, 3, 4, 5].filter(el => el > 2), [3, 4, 5]));

console.assert([2, 4].reduce((acc, curr) => acc + curr) === 6);

// Only works in Node 11+, Chrome 69+, Firefox 62+, Safari 12+
console.assert(
  Array.prototype.flat
    ? deepEqual([[1, 2], [3, 4], [5, 6]].flat(), [1, 2, 3, 4, 5, 6])
    : true
);
// Only works in Node 11+, Chrome 69+, Firefox 62+, Safari 12+
console.assert(
  Array.prototype.flatMap
    ? deepEqual([1, 2, 3, 4, 5, 6].flatMap(el => [el, el + 1]), [
        1,
        2,
        2,
        3,
        3,
        4,
        4,
        5,
        5,
        6,
        6,
        7
      ])
    : true
);

let sum = 0;
[1, 2, 3].forEach(n => {
  sum += n;
});
console.assert(sum === 6);

console.assert(['a', 'b'].find(el => el === 'c') === undefined);

console.assert(['a', 'b'].findIndex(el => el === 'b') === 1);

console.assert([5, 6, 7, 8].every(el => el > 4));
console.assert([0, 1, 2, 5, 6, 7, 8].some(el => el < 4));

console.assert(
  deepEqual([3, 5, 1, 4].sort((a, b) => (a > b ? 1 : -1)), [1, 3, 4, 5])
);
