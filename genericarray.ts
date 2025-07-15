//any
// function getTest(arr: any[]) {
//    console.log(arr[0]);
//    return arr[0]
// }
// const val1 = getTest(["tests","1","2"]);


//generic
function getTest2<T>(arr: T[]): T {
   console.log(arr[0]);
   return arr[0]
}
const val = getTest2<string>(["tests","1","2"]);
const val1 = getTest2<number>([10,20,50])