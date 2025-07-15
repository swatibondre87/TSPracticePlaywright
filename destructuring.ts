//array destructuring
const numbers1 = [1, 2, 3];

const [a, , c] = numbers1;

console.log(a); // 1
console.log(c); // 3

//properties from object
const user1 = {
  name1: 'Alice',
  age: 30,
  location1: 'NYC',

};

const { name1: username, location1 } = user1;

console.log(username);     // 'Alice'
console.log(location1); // 'NYC'


