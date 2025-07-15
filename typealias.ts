type Credentials = {
  username: string;
  password: string;
};


function login1(creds: Credentials): void {
  console.log(`Logging in with ${creds.username}`);
  

}

