interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

const user: User = {
    name: "Swati",
    age: 37,
    isAdmin: true
}

function greet(user: User): void {
  console.log(`Hello ${user.name}, age ${user.age}, ${user.isAdmin}`);
}

const tester: User = { name: 'Swati', age: 37, isAdmin: true};
greet(tester);
