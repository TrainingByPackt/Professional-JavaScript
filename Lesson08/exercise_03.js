function getProfile(id) {
    return new Promise((resolve, reject) => {
        switch(id) {
            case 'P6HB0O':
                resolve({ id: 'P6HB0O', name: 'Miku', age: 16, dob: '0831' });
            break;
            case '2ADN23':
                resolve({ id: '2ADN23', name: 'Rin', age: 14, dob: '1227' });
            break;
            case '6FFQTU':
                resolve({ id:'6FFQTU', name: 'Luka', age: 20, dob: '0130' });
            break;
            default:
                reject(new Error('user not found'));
        }
    });
}

function getCart(user) {
    return new Promise((resolve, reject) => {
        switch(user.id) {
            case 'P6HB0O':
                resolve({ ...user, cart: ['leek', 'cake', 'notebook'] });
            break;
            case '2ADN23':
                resolve({ ...user, cart: ['ice cream', 'banana'] });
            break;
            case '6FFQTU':
                resolve({ ...user, cart: ['tuna', 'tako'] });
            break;
            default:
                reject(new Error('user not found'));
        }
    });
}

function getSubscription(user) {
    return new Promise((resolve, reject) => {
        switch (user.id) {
            case 'P6HB0O':
                resolve({ ...user, subscription: true });
                break;
            case '2ADN23':
                resolve({ ...user, subscription: false });
                break;
            case '6FFQTU':
                resolve({ ...user, subscription: false });
                break;
            default:
                reject(new Error('user not found'));
        }
    });
}

function getFullRecord(id) {
    return getProfile(id)
        .then(getCart)
        .then(getSubscription);
}

function getFullRecords() {
    const ids = ['P6HB0O', '2ADN23', '6FFQTU'];
    const promises = ids.map(getFullRecord);
    return Promise.all(promises);
}

getFullRecord('P6HB0O').then(console.log);
getFullRecords().then(console.log);