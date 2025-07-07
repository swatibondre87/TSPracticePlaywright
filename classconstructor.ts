class LoginPages {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  open(): void {
    console.log(`Navigating to ${this.url}`);
  }
}

const logins = new LoginPages("https://example.com/login");
logins.open(); // Output: Navigating to https://example.com/login