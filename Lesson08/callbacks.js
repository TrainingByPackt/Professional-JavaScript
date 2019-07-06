const clientApi = {
    getRate: (id, callback) => {
        setTimeout(() => {
            switch (id) {
                case 'DDW2AU':
                    callback(null, 1.23);
                break;
                case 'DV50PD':
                    callback(null, 0.9);
                break;
                case 'WCGL6F':
                    callback(null, 1.6);
                break;
                default:
                    callback(new Error ('not found'))
            }
        }, 100);
    },
    getUsers: (callback) => {
        setTimeout(() => {
            callback(null, {
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
        }, 1000);
    },
    getUsage: (id, callback) => {
        setTimeout(() => {
            switch (id) {
                case 'DDW2AU':
                    callback(null, [2.1, 3.2, 6.2, 5.6, 1.2]);
                break;
                case 'DV50PD':
                    callback(null, [6.3, 5.2, 1.1, 5.7, 2.6]);
                break;
                case 'WCGL6F':
                    callback(null, [6.2, 2.6, 5.8, 6.2, 9.5]);
                break;
                default:
                    callback(new Error ('not found'))
            }
        }, 500);
    }
};

function calculate(id, callback) {
    clientApi.getUsers((error, result) => {
        if (error) { return callback(error); }
        const currentUser = result.users.find((user) => user.id === id);
        if (!currentUser) { return callback(new Error('user not found')); }
        clientApi.getUsage(id, (error, usage) => {
            if (error) { return callback(error); }
            clientApi.getRate(id, (error, rate) => {
                if (error) { return callback(error); }
                callback(null, {
                    id,
                    address: currentUser.address,
                    due: (rate * usage.reduce((prev, curr) => curr + prev)).toFixed(2)
                });
            });
        });
    });
}

calculate('DDW2AU', (error, result) => {
    console.log(error, result);
});