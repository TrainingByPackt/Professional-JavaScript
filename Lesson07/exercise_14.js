const numbers = [ 20, 1, 3, 55, 100, 2];
numbers.sort();
console.log(numbers);

function compareNumber(a, b) {
    return a - b;
}
numbers.sort(compareNumber);
console.log(numbers);

const profiles = [
    { name: 'Michael Scott', age: 42 },
    { name: 'Jim Halpert', age: 27},
    { name: 'Dwight Shrute', age: 37 },
    { name: 'Random User', age: 10 },
    { name: 'Hatsune Miku', age: 16 },
    { name: 'Rin Kagamine', age: 14 }
];
profiles.sort();
console.log(profiles);

function compareAge(a, b) {
    return a.age - b.age;
}

profiles.sort(compareAge);
console.log(profiles);
