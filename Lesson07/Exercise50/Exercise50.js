const foods = ['sushi', 'tofu', 'fried chicken'];
foods.join(', ');

function eat_food(food) {
    console.log('I am eating ' + food);
}

function eat_food(food) {
    console.log('I am eating ' + food);
}

for(let i = 0; i < foods.length; i++) {
    eat_food(foods[i]);
}

foods.forEach(eat_food);

const nutrition = [100, 50, 400];
const foodInfo = foods.map((food, index) => {
    return {
        name: food,
        calories: nutrition[index]
    };
});
console.log(foodInfo);