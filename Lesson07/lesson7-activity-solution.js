// Code needs refactoring
function itemExist(array, item) {
    return array.includes(item);
}
function pushUnique(array, item) {
    if (!itemExist(array, item)) {
        array.push(item);
    }
}
function createFilledArray(size, init) {
    const newArray = new Array(size).fill(init);
    return newArray;
}
function removeFirst(array) {
    return array.shift();
}
function removeLast(array) {
    return array.pop();
}
function cloneArray(array) {
    return [...array];
}

// Class defination
class Food {
    constructor(type, calories) {
        this.type = type;
        this.calories = calories;
    }
    getCalories() {
        return this.calories;
    }
}

// Do not modify
function test() {
    const pushTest = ['hi', 'another'];
    pushUnique(pushTest, 'hi');
    pushUnique(pushTest, 'hi');
    pushUnique(pushTest, 'another item');
    pushUnique(pushTest, 'another item');
    assert(pushTest.length === 3);
    assert(pushTest[2] === 'another item');
    const filledTest = createFilledArray(12, 'test');
    assert(filledTest.length === 12);
    assert(filledTest[11] === 'test');
    const removeFirstTest = ['item1', 'item2', 'item3'];
    const first = removeFirst(removeFirstTest);
    assert(first === 'item1');
    assert(removeFirstTest.length === 2);
    assert(removeFirstTest[0] === 'item2');
    const removeLastTest = ['item1', 'item2', 'item3'];
    const last = removeLast(removeLastTest);
    assert(last === 'item3');
    assert(removeLastTest.length === 2);
    assert(removeLastTest[1] =  'item2');
    const cloneTest = ['item1', 'item2'];
    const cloneTestClone = cloneArray(cloneTest);
    assert(cloneTest.length === cloneTestClone.length);
    const testFood = new Food('chicken', 200);
    assert(testFood.type === 'chicken');
    assert(testFood.getCalories() === 200);

    console.log('=======TEST PASSED========');
}

test();