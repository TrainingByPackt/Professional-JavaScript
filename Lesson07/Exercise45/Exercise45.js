function Food(name, calories, cost) {
    this.name = name;
    this.calories = calories;
    this.cost = cost;
}
Food.prototype.description = function () {
    return this.name + ' calories: ' + this.calories;
}
let burger = new Food('burger', 1000, 9);
console.log(burger.description());