Number.prototype.double = function () {
  return this.valueOf()*2;
}

Number.prototype.square = function () {
  return this.valueOf()*this.valueOf();
}

Number.prototype.fibonacci = function () {
  function iterator(a, b, n) {
    return n == 0n ? b : iterator((a+b), a, (n-1n))
  }
  function fibonacci(n) {
    n = BigInt(n);
    return iterator(1n, 0n, n);
  }
  return fibonacci(this.valueOf());
}

Number.prototype.factorial = function () {
  factorial = (n) => {
    n = BigInt(n);
    return (n>1) ? n * factorial(n-1n) : n;
  }
  return factorial(this.valueOf());
}

let n = 100;

console.log(
  "for number " + n +"\n",
  "double is " + n.double() + "\n",
  "square is " + n.square() + "\n",
  "fibonacci is " + n.fibonacci() + "\n",
  "factorial is " + n.factorial() + "\n"
);
