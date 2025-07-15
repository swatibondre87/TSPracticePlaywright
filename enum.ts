const MAX_RETRIES = 5;
//MAX_RETRIES = 10;


//enum with default: 0,1,2
enum testExecutionStatus{
   Pass,
   Fail,
   Skip
}
console.log(testExecutionStatus.Skip);


//enum with custom value
enum priority{
   Low = 1,
   Medium = 2,
   High = 3
}
console.log(priority.Low)


//enum with string
enum userRole {
   Admin = "adm01",
   Manager = "mng80",
   Employee = "swati",
   Student = "stu87"
}
console.log(userRole.Employee)

function getRole(role: userRole): string {
  if (role === userRole.Admin) {
   console.log("Access Provided");
   return "Access Provided";
  }
  console.log("Access Denied");
  return "Access Denied";
}

getRole(userRole.Manager);