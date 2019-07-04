const map = new Map();
const key1 = 'key1';
const key2 = { name: 'John', age: 18 };
const key3 = Map;
map.set(key1, 'value for key1');
map.set(key2, 'value for key2');
map.set(key3, 'value for key3');
console.log(map.get(key1));
console.log(map.get(key2));
console.log(map.get(key3));

console.log(map.get({ name: 'John', age: 18 }));

map.forEach((value, key) => {
    console.log('the value for key: ' + key + ' is ' + value);
});
console.log(map.keys());
console.log(map.values());
console.log(map.has('non exist')); // false