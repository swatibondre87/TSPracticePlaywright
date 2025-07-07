class UserProfile {
  public name: string;
  private password: string;
  protected email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  public showProfile(): void {
    console.log(`Name: ${this.name}`);
  }

  private showPassword(): void {
    console.log(`Password: ${this.password}`);
  }

  protected showEmail(): void {
    console.log(`Email: ${this.email}`);
  }
}

const obj = new UserProfile("Swati", "Shlok@123", "badhe.swati16@gmail.com")
obj.showProfile()

