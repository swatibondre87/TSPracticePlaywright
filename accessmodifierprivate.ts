class UserProfiles {
 
  private password: string;
  

  constructor(password: string) {
   
    this.password = password;
    
  }


  showPassword(): void {
    console.log(`Password: ${this.password}`);
  }

  
 
}

const objss = new UserProfiles("Shlok@123")
  objss.showPassword();



