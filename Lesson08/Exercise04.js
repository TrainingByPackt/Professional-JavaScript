const clientApi = {
    getRate: (id) => {
        return new Promise((resolve, reject) => {
            switch (id) {
                case 'DDW2AU':
                    resolve(1.23);
                    break;
                case 'DV50PD':
                    resolve(0.9);
                    break;
                case 'WCGL6F':
                    resolve(1.6);
                    break;
                default:
                    reject(new Error('not found'))
            }
        });
    },
    getUsers: () => {
        return Promise.resolve({
            users: [
                {
                    id: 'DDW2AU',
                    address: '4560 Hickman Street'
                },
                {
                    id: 'DV50PD',
                    address: '3445 Red Hawk Road'
                },
                {
                    id: 'WCGL6F',
                    address: '2355 University Hill Road'
                }
            ]
        });
    },
    getUsage: (id) => {
        return new Promise((resolve, reject) => {
            switch (id) {
                case 'DDW2AU':
                    resolve([2.1, 3.2, 6.2, 5.6, 1.2]);
                    break;
                case 'DV50PD':
                    resolve([6.3, 5.2, 1.1, 5.7, 2.6]);
                    break;
                case 'WCGL6F':
                    resolve([6.2, 2.6, 5.8, 6.2, 9.5]);
                    break;
                default:
                    reject(new Error('not found'))
            }
        });
    }
};

function calculate(id) {
    return clientApi.getUsers().then((result) => {
        const currentUser = result.users.find((user) => user.id === id);
        if (!currentUser) { throw Error('user not found'); }
        return clientApi.getUsage(currentUser.id).then((usage) => {
            return clientApi.getRate(currentUser.id).then((rate) => {
                return {
                    id,
                    address: currentUser.address,
                    due: (rate * usage.reduce((prev, curr) => curr + prev)).toFixed(2)
                }
            })
        });
    });
}

function calculateAll() {
    return clientApi.getUsers().then((result) => {
        return Promise.all(result.users.map((user) => calculate(user.id)));
    });
}

calculate('DDW2AU').then(console.log)

calculateAll().then(console.log)