// 1
const userInfo = { name: 'John', job: 'chef', age: 34 };
// 2
let name, job;
// 3
({ name, job } = userInfo);
// 4
console.log(name);
console.log(job);
// 5
const userInfo = ['John', 'chef', 34];
let [ name, , age] = userInfo;
console.log(name);
console.log(age);
// 6
const userInfoObj = { name: 'John', job: 'chef', age: 34 };
let { job } userInfoObj;
console.log(job);
