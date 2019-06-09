function fibonacciIterator(a, b, n) {
  return n == 0 ? b : fibonacciIterator((a+b), a, (n-1));
}

function fibonacci(n) {
  return fibonacciIterator(1, 0, n);
}

module.exports = fibonacci;
