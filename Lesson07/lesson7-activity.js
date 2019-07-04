// Code needs refactoring
function itemExist(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
}
function pushUnique(array, item) {
    if (!itemExist(array, item)) {
        array[array.length] = item;
    }
}
function createFilledArray(size, init) {
    const newArray = new Array(size);
    for (let i = 0; i < size; i++) {
        newArray[i] = init;
    }
    return newArray;
}
function removeFirst(array) {
    if (!array.length) {
        return undefined;
    }
    const firstItem = array[0];
    for (let i = 1; i < array.length; i++) {
        array[i - 1] = array[i];
    }
    delete array[array.length - 1];
    array.length = array.length - 1;
    return firstItem;
}
function removeLast(array) {
    if (!array.length) {
        return undefined;
    }
    const lastItem = array[array.length - 1];
    delete array[array.length - 1];
    array.length = array.length - 1;
    return lastItem;
}
function cloneArray(array) {
    const newClone = [];
    for (let i = 0; i < array.length; i++) {
        newClone[i] = array[i];
    }
    return newClone;
}

// Class defination
function Food(type, calories) {
    this.type = type;
    this.calories = calories;
}

Food.prototype.getCalories = function () {
    return this.calories;
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