const slowAPI = {
    getUsers: (callback) => {
        setTimeout(() => {
            callback(null, {
                status: 'OK',
                data: {
                    users: [
                        {
                            name: 'Miku'
                        },
                        {
                            name: 'Len'
                        },
                        {
                            name: 'Kaito'
                        },
                        {
                            name: 'Luka'
                        }
                    ]
                }
            });
        }, 1000);
    },
    getCart: (username, callback) => {
        setTimeout(() => {
            if (username === 'Miku') {
                callback(null, {
                    status: 'OK',
                    data: {
                        cart: ['Leek', 'Cake']
                    }
                })
            } else if (username === 'Rin') {
                callback(null, {
                    status: 'OK',
                    data: {
                        cart: ['Banana', 'Cake']
                    }
                })
            } else if (username === 'Kaito') {
                callback(null, {
                    status: 'OK',
                    data: {
                        cart: ['Ice Cream', 'Cake']
                    }
                })
            } else {
                callback(new Error('User not found'));
            }
        }, 500);
    }
}
function runRequests() {
    slowAPI.getUsers((error, response) => {
        if (error) {
            console.error('Error occured when running getUsers');
            throw new Error('Error occurred');
        }
        slowAPI.getCart(response.data.users[3].name, (error, result) => {
            if (error) {
                console.error(error);
                throw new Error('Error occurred');
            }
            console.log(result);
        });
    });
}
runRequests();