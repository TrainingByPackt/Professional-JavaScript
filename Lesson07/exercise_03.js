let foods = [];

foods.push('burger');
foods.push('fries');
foods.push('wings');

console.log(foods.indexOf('burger'));

console.log(foods.length);

let position = foods.indexOf('burger');
foods.splice(position, 1);

console.log(foods);
