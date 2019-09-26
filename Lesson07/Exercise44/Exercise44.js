// 1
const userInfo = ['John', 'chef', 34];

// 2
function printUser(name, job, age) {
console.log(name + ' is working as ' + job + ' and is ' + age + ' years old');
}

// 3
printUser(...userInfo)

// 4
const detailedInfo = ['male', ...userInfo, 'July 5']
console.log(detailedInfo)

// 5
let detailedInfoCopy = [ ...detailedInfo ];
console.log(detailedInfoCopy)

// 6
const userRequest = { name: 'username', type: 'update', data: 'newname'}

//7
const newObj = { ...userRequest }
console.log(newObj)

//8
const detailedRequestObj = { data: new Date(), new: true, ...userRequest}
console.log(detailedRequestObj)

