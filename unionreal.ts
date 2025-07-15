function findUser(idOrName: number | string) {
  if (typeof idOrName === "number") {
    return `Looking up user by ID: ${idOrName}`;
  } else {
    return `Looking up user by name: ${idOrName}`;
  }
}

console.log(findUser(101));      // by ID
console.log(findUser("john_doe")); // by name


function riskyPrint(data: string | number) {
  // console.log(data.toUpperCase()); ❌ Error: number may not have toUpperCase
  if (typeof data === 'string') {
   // console.log(data.toUpperCase()); // ✅ safe
    return (data.toUpperCase())
  }
}

console.log(riskyPrint("swati"))
