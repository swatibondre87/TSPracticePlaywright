let creds = new Map<string, any>();
creds.set("username", "sid");
creds.set("password", 123);
console.log(creds.get("username")) //sid
console.log(creds)// Map(2) { 'username' => 'sid', 'password' => 123 }
console.log(creds.delete("username")) // true
console.log(creds) // Map(1) { 'password' => 123 }
console.log(creds.has("username")) //as uername is deleted: false
creds.clear(); //Remove all entries
console.log(creds) // Map(0) {}

creds.set("username", "sid");
creds.set("password", 123);

for (let [i,j] of creds.entries()) {

    if(i === "username"){

        console.log("key is persent") //key is persent
    }

console.log(`${i} ---> ${j}`) // username ---> sid
                              // password ---> 123
}

//key
for (let i of creds.keys()) {
console.log(`${i}`)
}

//value
for (let j of creds.values()) {
console.log(`${j}`)
}

