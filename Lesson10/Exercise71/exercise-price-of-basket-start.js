const basket1 = [
  {
    quantity: 1,
    price: 199,
    name: 'Soda bottle'
  },
  {
    quantity: 2,
    price: 2499,
    name: 'Kitchenware kits'
  }
];

const basket2 = [
  {
    quantity: 2,
    price: 199,
    name: 'Soda bottle'
  },
  {
    quantity: 1,
    price: 499,
    name: 'Biscuits'
  }
];

function totalBasket(basket) {
  return basket;
}

console.assert(
  totalBasket(basket1) === 5197,
  'basket1 should tally up to 5197'
);
console.assert(totalBasket(basket2) === 897, 'basket2 should tally up to 897');
