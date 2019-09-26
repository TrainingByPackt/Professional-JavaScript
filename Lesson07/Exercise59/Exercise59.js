function range(max) {
    return {
        *[Symbol.iterator]() {
            for (let i = 0; i < max; i++) {
                yield i;
            }
        }
    };
}

for (let value of range(10)) {
    console.log(value);
}

function* gen() {
    yield 1;
}

const generator = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());