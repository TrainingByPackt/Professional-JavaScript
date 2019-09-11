const myPromise = new Promise((resolve) => {
    resolve(12);
}).then((value) => {
    console.log(value);
});
const myPromiseValue = Promise.resolve(12);

const myRejectedPromise = Promise.reject(new Error('rejected'));

myRejectedPromise.catch((error) => {
    console.log(error);
});

function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(seconds);
        }, seconds * 1000);
    })
}
function waitCallback(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

wait(2).then((seconds) => {
    console.log('i waited ' + seconds + ' seconds');
});
wait(2)
    .then(() => wait(2))
    .then(() => {
        console.log('i waited 4 seconds');
    });
