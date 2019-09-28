let exampleArray1 = [];
Array.isArray(exampleArray1);

// Or
let exampleArray2 = new Array();
Array.isArray(exampleArray2);

// Or
let exampleArray3 = [];
typeof exampleArray3

// Or
let exampleArray4 = new Array(6);
console.log(exampleArray4);

// Or
let singers = new Array(6).fill('miku');

singers[0] = 'miku';
console.log(singers);

singers[3] = 'luka';
console.log(singers[1]);

singers[singers.length - 1] = 'rin';
console.log(singers);
