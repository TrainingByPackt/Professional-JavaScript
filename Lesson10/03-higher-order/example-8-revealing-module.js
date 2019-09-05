const counter = (function(startCount = 0) {
  let count = startCount;
  return {
    add(x) {
      count += x;
    },
    substract(x) {
      count -= x;
    },
    current() {
      return count;
    }
  };
})(0);

// Count is undefined
try {
  console.assert(!count, 'count should not be defined in this scope');
} catch (error) {
  console.assert(error, 'should be an error');
}

counter.add(5);
console.assert(counter.current() === 5, 'add works');
counter.substract(5);
console.assert(counter.current() === 0, 'substract works');
counter.add(-5);
console.assert(counter.current() === -5, 'add with negative works');
counter.substract(-5);
console.assert(counter.current() === 0, 'substract with negative works');
