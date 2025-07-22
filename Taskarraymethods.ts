let users: string[] = ['sid', 'rahul'];
console.log(users) // [ 'sid', 'rahul' ]
console.log(users.length) // 2
console.log(users[1]) //rahul
users.push('swati') 
console.log(users) // ['sid', 'rahul', 'swati']  
users.pop() 
console.log(users) // ['sid', 'rahul']  
users.shift() 
console.log(users)// ['rahul']
users.unshift('shlok')
console.log(users) //  ['shlok', 'rahul']
console.log(users.includes('rahul')); //true
users.push('swati')
console.log(users) // ['shlok', 'rahul', 'swati']
console.log(users.indexOf('swati')) //2
console.log(users.filter(u => u.startsWith('s'))) // ['shlok', 'swati']
console.log(users.filter(u => u.endsWith('l'))) // ['rahul']

users.forEach(i => console.log(i)) //shlok
                                  // rahul
                                  // swati


console.log(users.find(u => u === 'swati' )) // swati
console.log(users.map(u => u.toUpperCase())) // ['SHLOK', 'RAHUL', 'SWATI']
console.log(users.map(u => u.toLowerCase())) // ['shlok', 'rahul', 'swati']

//replace method
//console.log(users.filter(j => j.replace('s','l'))) // replace method is not working with filter
console.log(users.map(u => u.replace('s','l'))) //replace method works with map: [ 'lhlok', 'rahul', 'lwati' ]

console.log(users.join(',')) //shlok,rahul,swati

