// 1
const userInfo = ['John', 'chef', 34];
// 2
let name, age, job;
// 3
[name, job, age] = userInfo;
// 4
console.log(name);
console.log(job);
console.log(age);
// 5
[name, ,age] = userInfo
