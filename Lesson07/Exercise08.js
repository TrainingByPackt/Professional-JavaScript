// 1
> const userInfo = ['John', 'chef', 34];
// 2
> function printUser(name, job, age) {
... console.log(name + ' is working as ' + job + ' and is ' + age + ' years old');
... }

// 3
> printUser(...userInfo)
John is working as chef and is 34 years old

// 4
> const detailedInfo = ['male', ...userInfo, 'July 5']
=> [ 'male', 'John', 'chef', 34, 'July 5' ]

// 5
> let detailedInfoCopy = [ ...detailedInfo ];
=> undefined
> detailedInfoCopy
=> [ 'male', 'John', 'chef', 34, 'July 5' ]

// 6
> const userRequest = { name: 'username', type: 'update', data: 'newname'}

//7
> const newObj = { ...userRequest }
=> undefined
> newObj
=> { name: 'username', type: 'update', data: 'newname' }

//8
> const detailedRequestObj = { data: new Date(), new: true, ...userRequest}
=> undefined
> detailedRequestObj
=> { data: 'newname', new: true, name: 'username', type: 'update' }

