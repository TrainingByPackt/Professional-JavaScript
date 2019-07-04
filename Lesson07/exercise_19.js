function generateRandomString(length) {
    const characters = [];
    const characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        characters.push(characterSet.charAt(generateRandomNumber(0, characterSet.length)));
    }
    return characters.join('');
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomString(16));

console.log(Math.PI);

function circleArea(radius) {
    return Math.pow(radius, 2) * Math.PI;
}

const now = new Date();
console.log(now);

const past = new Date('August 31, 2007 00:00:00');
console.log(past);

console.log(past.getFullYear());
console.log(past.getMonth());
console.log(past.getDate());

console.log(past.toString());

console.log(Math.floor(Date.now() / 1000));