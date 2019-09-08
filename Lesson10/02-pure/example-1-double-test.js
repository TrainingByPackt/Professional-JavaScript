const double = x => x * 2;

function test() {
  console.assert(double(1) === 2, '1 doubled should be 2');
  console.assert(double(-1) === -2, '-1 doubled should be -1');
  console.assert(double(0) === 0, '0 doubled should be 0');
  console.assert(double(500) === 1000, '500 doubled should be 1000');
}

test();
