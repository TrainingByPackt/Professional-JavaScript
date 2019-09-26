const cart = [];

cart.push({ name: 'CD', price: 12.00, amount: 2 });
cart.push({ name: 'Book', price: 45.90, amount: 1 });
cart.push({ name: 'Headphones', price: 5.99, amount: 3 });
cart.push({ name: 'Coffee', price: 12.00, amount: 2 });
cart.push({ name: 'Mug', price: 15.45, amount: 1 });
cart.push({ name: 'Sugar', price: 5.00, amount: 1 });

let total = 0;
cart.forEach((item) => {
    total += item.price * item.amount;
});
console.log('Total amount: ' + total);

function priceReducer (accumulator, currentValue) {
    return accumulator += currentValue.price * currentValue.amount;
}

total = cart.reduce(priceReducer, 0);
console.log('Total amount: ' + total);
