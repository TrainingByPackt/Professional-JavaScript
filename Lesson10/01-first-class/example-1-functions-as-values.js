// A function can be assigned to a variable
const fn = function run() {
  return 'Running...';
};

// A function can be set as
// a value in an Array
const operations = [
  fn,
  function() {
    console.log('Regular functions work');
  },
  () => console.log('Arrows work too')
];

// A function can be set as a
// value in an object
const Module = {
  // With ES6 shorthand property
  fn,
  method1() {},
  arrow: () => console.log('works too')
};

console.assert(Module.fn() === 'Running...');

// A function can be passed as an argument
function runner(fn) {
  return fn();
}

console.assert(runner(fn) === 'Running...');
