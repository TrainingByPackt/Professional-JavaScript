const simpleObject = {};

const handlers = {
    get: (object, prop) => {
        return 'values are private';
    },
    set: (object, prop, value) => {
        if (prop === 'id') {
            if (!Number.isNaN(value)) {
                throw new TypeError('The id needs to be a number');
            }
        }
    }
}

const proxiedValue = new Proxy(simpleObject, handlers);

proxiedValue.key1 = 'value1';

console.log(proxiedValue.key1);
console.log(proxiedValue.keyDoesntExist);

proxiedValue.id = 'not an id'