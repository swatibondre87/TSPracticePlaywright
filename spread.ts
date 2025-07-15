// Spread in Arrays

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // clone and add

console.log(arr2); // [1, 2, 3, 4, 5]


const a1 = [1, 2];
const b1 = [3, 4];
const c2 = [...a1, ...b1]; // [1, 2, 3, 4]
console.log(c2)


const users1 = { name: 'Alice', age: 30 };
const updatedUser = { ...users1, age: 31, city: 'Seattle' };

console.log(updatedUser);
// { name: 'Alice', age: 31, city: 'Seattle' }

