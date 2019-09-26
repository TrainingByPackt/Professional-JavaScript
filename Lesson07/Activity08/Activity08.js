function logUser(userList, user) {
    if(!userList.includes(user)) {
        userList.push(user);
    }
}

function numUsers(userList) {
    return userLeft.length;
}

function userLeft(userList, user) {
    const userIndex = userList.indexOf(user);
    if (userIndex >= 0) {
        userList.splice(userIndex, 1);
    }
}

function runSite() {
    // Your user list for your website
    const users = [];
    // Simulate user viewing your site
    logUser(users, 'user1');
    logUser(users, 'user2');
    logUser(users, 'user3');
    // User left your website
    userLeft(users, 'user2');
    // More user goes to your website
    logUser(users, 'user4');
    logUser(users, 'user4');
    logUser(users, 'user5');
    logUser(users, 'user6');
    // More user left your website
    userLeft(users, 'user1');
    userLeft(users, 'user4');
    userLeft(users, 'user2');
    console.log('Current user: ', users.join(', '));
}

runSite();
