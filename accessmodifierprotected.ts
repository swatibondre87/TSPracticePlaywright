class UserProfiless {
 
  protected email: string;
  

  constructor(email: string) {
   
    this.email = email;
    
  }


  showEmail(): void {
    console.log(`Email: ${this.email}`);
  }

  
 
}

const objs = new UserProfiless("badhe.swati16@gmail.com")
  objs.showEmail();



  //Protected - Accessible within the class and subclasses

  class UserProfilesub extends UserProfiless {
 constructor(email: string) {
   super(email);
 }
 printPassword(): void {
   console.log(`Email : ${this.email}`);
 }

  }

  const c1 = new UserProfilesub("badhe.swati16@gmail.com");
c1.printPassword();


