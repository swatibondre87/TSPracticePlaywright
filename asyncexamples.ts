function fetchUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John Doe");
    }, 2000); // 2 seconds delay
  });
}

async function getUserAndGreet() {
  console.log("Fetching user...");
  const user = await fetchUser(); // waits for fetchUser to resolve
  console.log(`Hello, ${user}!`);
}

getUserAndGreet();
