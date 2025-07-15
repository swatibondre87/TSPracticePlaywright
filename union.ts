let value: string | number;
value = "hello"; // ✅ OK
value = 123;     // ✅ OK
//value = true;    // ❌ Error: boolean not allowed


function greet(user: string | number): string {
  if (typeof user === "string") {
    return `Hello, ${user}!`;
  } else {
    return `You are ${user} years old.`;
  }
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet(30));  