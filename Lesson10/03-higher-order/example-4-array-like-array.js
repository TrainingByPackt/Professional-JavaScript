function toArrayApply(arrayLike) {
  return Array.prototype.slice.apply(arrayLike);
}

function toArrayCall(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
}

function toArraySpread(arrayLike) {
  return [...arrayLike];
}

function hasArrayLikeInput() {
  // `arguments` is an array-like object
  // other examples of this are NodeLists
  // in the browser (returned by querySelectorAll)
  console.assert(!arguments.forEach);
  console.assert(!arguments.map);
  console.assert(!Array.isArray(arguments));

  console.assert(toArrayApply(arguments).forEach);
  console.assert(toArrayApply(arguments).map);
  console.assert(Array.isArray(toArrayApply(arguments)));

  console.assert(toArrayCall(arguments).forEach);
  console.assert(toArrayCall(arguments).map);
  console.assert(Array.isArray(toArrayCall(arguments)));

  console.assert(toArraySpread(arguments).forEach);
  console.assert(toArraySpread(arguments).map);
  console.assert(Array.isArray(toArraySpread(arguments)));
}

hasArrayLikeInput();
