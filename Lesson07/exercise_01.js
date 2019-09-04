let singers = [];
Array.isArray(singers);

// Or
singers = new Array();
typeof singers

// Or
singers = new Array(6);

// Or
let singers = new Array(6).fill('miku');

singers[0] = 'miku';
console.log(singers);

singers[3] = 'luka';
console.log(singers[1]);

singers[singers.length - 1] = 'rin';
console.log(singers);
