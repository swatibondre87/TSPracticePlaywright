// let users: [string, number] = ['Sidharth', 101];

// let emp: [string,number,number?]
// emp =['Swati', 37,37]
// emp = ['Swati', 37]
// console.log(emp)

// let employees: {name: string, age: number, mobile?:number} = {
//     name: 'Swati',
//     age: 37,
//     mobile: 37
// }
// console.log(employees)

function empdetails([name,age]: [string, number]){
    // console.log(name)
    // console.log(age)
    console.log(`Name is:  ${name}, Age is: ${age}`)
}
empdetails(['Swati', 37])

function empdetail() : [string,number]{
    return ['Swati', 37]
   
}
let [empname, empage] = empdetail()
 console.log(`Name is:  ${empname}, Age is: ${empage}`)


