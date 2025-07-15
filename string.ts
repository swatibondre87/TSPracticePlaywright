let str: string = "PPlaywright";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.includes("Play"));
console.log(str.replace("wright", "test"));
console.log(str.substring(0, 4)); // "Play"
console.log(str.replace("P", "*"));
console.log(str.replaceAll("P", "*"))


//split
let str1: string = "This is it";
console.log(str1.split("")) //without space
console.log(str1.split(" ")) //with space

//trim
let str2: string = "This is it";
console.log(str2.trim())

//split
const language = "Javascript,java,python"
const languages  =  language.split(",")
for(const i of languages){
    if(i === "java"){
console.log("java word found")
    }

}


