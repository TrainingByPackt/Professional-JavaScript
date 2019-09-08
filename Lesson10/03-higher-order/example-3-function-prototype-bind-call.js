function identity(x) {
  return x;
}

const identityApplyBound = Function.prototype.bind.apply(identity, [
  null,
  'applyBound'
]);

const identityCallBound = Function.prototype.bind.call(
  identity,
  null,
  'callBound'
);

console.assert(
  identityApplyBound() === 'applyBound',
  'bind.apply should set parameter correctly'
);
console.assert(
  identityCallBound() === 'callBound',
  'bind.call should set parameter correctly'
);
