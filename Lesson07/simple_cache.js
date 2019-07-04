class MySimpleCache {
    constructor() {
        // Declare your cache internal properties here
        this.cacheItems = {};
    }
    getItem(key) {
        // Return the cached item with key
        return this.cacheItems[key];
    }
    addItem(key, value) {
        // Add an item with the key
        this.cacheItems[key] = value;
    }
    updateItem(key, value) {
        // Update an value use the key
        this.addItem(key, value);
    }
    removeItem(key) {
        this.updateItem(key, undefined);
    }
}

function testMyCache() {
    const cache = new MySimpleCache();

    cache.addItem('user1', { name: 'user1', dob: 'Jan 1' });
    cache.addItem('user2', { name: 'user2', dob: 'Jul 21' });
    cache.updateItem('user1', { name: 'user1', dob: 'Jan 2' });
    cache.addItem('user3', { name: 'user3', dob: 'Feb 1' });
    cache.removeItem('user3');

    assert(cache.getItem('user1').dob === 'Jan 2');
    assert(cache.getItem('user2').dob === 'Jul 21');
    assert(cache.getItem('user3') === undefined);

    console.log('=====TEST PASSED=====')
}

testMyCache();
