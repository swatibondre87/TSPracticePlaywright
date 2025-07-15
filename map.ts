let creds = new Map<string, any>();
creds.set("username", "sid");
creds.set("password", 123);
console.log(creds.get("username"))
console.log(creds)
console.log(creds.delete("username"))
console.log(creds)
console.log(creds.has("username")) //as uername is deleted
creds.clear(); //Remove all entries
console.log(creds)

creds.set("username", "sid");
creds.set("password", 123);

for (let [i,j] of creds.entries()) {

    if(i === "username"){

        console.log("key is persent")
    }

console.log(`${i} ---> ${j}`)

for (let i of creds.keys()) {
console.log(`${i}`)
}

for (let j of creds.values()) {
console.log(`${j}`)
}

}

