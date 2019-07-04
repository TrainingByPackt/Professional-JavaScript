function betterStringify(item, propertyMap) {
    let output = {};
    // Cherry pick all the property we want and store it in the output
    propertyMap.forEach((key) => {
        if (item[key]) {
            output[key] = item[key];
        }
    });
    return JSON.stringify(output);
}

const singer = {
 name: 'Hatsune Miku',
 age: 16,
 birthday: 'August 31',
 birthplace: 'Sapporo, Japan',
 songList: [
   'World is mine',
   'Tell your world',
   'Melt'
 ]
}

console.log(betterStringify(singer, ['name', 'birthday']));
