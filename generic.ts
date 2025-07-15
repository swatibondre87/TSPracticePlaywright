function identity<U>(value: U): U {
    console.log(value)
  return value;
}

const output1 = identity<string>("Swati");  // "Sidharth"
const output2 = identity<number>(101); 


