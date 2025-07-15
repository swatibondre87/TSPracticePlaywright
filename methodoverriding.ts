class ParentClassBasePage {
  fetchAccBal(): void {
    console.log("Navigating to Account Balance");
  }
}

class SubClassLoginPages extends ParentClassBasePage {
  override fetchAccBal(): void {
    console.log("Credit")
    console.log("Navigating to remaining account balance");
  }
}