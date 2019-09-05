const curry = fn => {
  return function curried(...args) {
    if (fn.length === args.length) {
      return fn.apply(this, args);
    }

    return (...args2) => curried.apply(this, args.concat(args2));
  };
};

const sum = (x, y) => x + y;

console.assert(sum(2, 2) === curry(sum)(2)(2));
