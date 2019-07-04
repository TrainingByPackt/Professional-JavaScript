const planets = [
    'Mercury',
    'Uranus',
    'Mars',
    'Venus',
    'Neptune',
    'Saturn',
    'Mars',
    'Jupiter',
    'Earth',
    'Saturn'
];
const planetSet = new Set(planets);
console.log(planetSet.values());

planetSet.add('Venus');
planetSet.add('Kepler-440b');
console.log(planetSet.size);

planetSet.clear();
console.log(planetSet);
