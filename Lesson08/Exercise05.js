function getConcertList() {
    return Promise.resolve([
        'Magical Mirai 2018',
        'Magical Mirai 2019'
    ]);
}

function getPrice(i) {
    const prices = [9900, 9000];
    return Promise.resolve(prices[i]);
}

function buggyCode() {
    return Promise.reject(new Error('computer: dont feel like working today'));
}

async function printList() {
    const concerts = await getConcertList();
    const prices = await Promise.all(concerts.map((c, i) => getPrice(i)));
    try {
        await buggyCode();
    } catch (error) {
        console.log('computer produced error');
        console.log(error);
    }
    return {
        concerts,
        prices
    };
}

printList().then(() => {
    console.log('I am going to both of them.')
});
