let profiles = [
    'Michael Scott',
    'Jim Halpert',
    'Dwight Shrute',
    'Random User',
    'Hatsune Miku',
    'Rin Kagamine'
];
let hasJim = profiles.includes('Jim Halpert');
console.log(hasJim);

profiles = [
    { name: 'Michael Scott', age: 42 },
    { name: 'Jim Halpert', age: 27},
    { name: 'Dwight Shrute', age: 37 },
    { name: 'Random User', age: 10 },
    { name: 'Hatsune Miku', age: 16 },
    { name: 'Rin Kagamine', age: 14 }
];

hasJim = profiles.includes({ name: 'Jim Halpert', age: 27});
console.log(hasJim);

hasJim = !!profiles.find((profile) => {
    return profile.name === 'Jim Halpert';
}).length;
console.log(hasJim);

const adults = profiles.filter((profile) => {
    return profile.age > 18;
});
console.log(adults);
