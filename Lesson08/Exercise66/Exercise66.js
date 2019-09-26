function getPlaylist(id) {
    const playLists = {
        'On the road': [0, 6, 5, 2],
        'Favorites' : [1, 4, 2],
        'Corrupted': [2, 4, 7, 1]
    };
    const playList = playLists[id];
    if (!playList) {
        throw new Error('Playlist does not exist');
    }
    return Promise.resolve(playLists[id]);
}

function getSongUrl(id) {
    const songUrls = [
        'http://example.com/1.mp3',
        'http://example.com/2.mp3',
        'http://example.com/3.mp3',
        'http://example.com/4.mp3',
        'http://example.com/5.mp3',
        'http://example.com/6.mp3',
        'http://example.com/7.mp3',
    ];
    const url = songUrls[id];
    if (!url) {
        throw new Error('Song does not exist');
    }
    return Promise.resolve(url);
}

async function playSong(id) {
    try {
        const url = await getSongUrl(id);
        console.log(`playing song #${id} from ${url}`);
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`song #${id} finished playing`);
                resolve();
            }, Math.random() * 3 * 1000);
        });
    } catch (error) {
        console.log('song not found');
    }
}

async function playPlaylist(id) {
    const playList = await getPlaylist(id);
    for (const songId of playList) {
        await playSong(songId);
    }
}

playPlaylist('Corrupted').then(() => {
    console.log('finished playing playlist');
}).catch((error) => {
    console.log(error);
});