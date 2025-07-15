let users: string[] = ['sid', 'rahul'];
console.log(users)
console.log(users.length)
console.log(users[1])
users.push('swati')
console.log(users)
users.pop()
console.log(users)
users.shift()
console.log(users)
users.unshift('shlok')
console.log(users)
console.log(users.includes('rahul'));
users.push('swati')
console.log(users)
console.log(users.indexOf('swati'))
console.log(users.filter(u => u.startsWith('s')))
console.log(users.filter(u => u.endsWith('l')))

users.forEach(i => console.log(i)) 

console.log(users.find(u => u === 'swati' ))
console.log(users.map(u => u.toUpperCase()))
console.log(users.map(u => u.toLowerCase()))

//replace method
//console.log(users.filter(j => j.replace('s','l'))) // replace method is not working with filter
console.log(users.map(u => u.replace('s','l'))) //replace method works with map

console.log(users.join(','))

