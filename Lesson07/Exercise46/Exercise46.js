class Food {
    constructor(name, calories, cost) {
        this.name = name;
        this.calories = calories;
        this.cost = cost;
    }
    static getCalories(food) {
        return food.calories
    }
    description() {
        return this.name + ' calories: ' + this.calories;
    }
}

// Food('burger', 1000, 9);
// TypeError: Class constructor Food2 cannot be invoked without 'new'
let friedChicken = new Food('fried chicken', 520, 5);
console.log(friedChicken.description());

console.log(Food.getCalories(friedChicken)); /// 520
