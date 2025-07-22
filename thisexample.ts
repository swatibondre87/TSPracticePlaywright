class TestRunner {
  testName = "LoginTest";

  run() {
    console.log(`Running ${this.testName}`);
  }
}

const testRunner = new TestRunner()
testRunner.run()


const runner = new TestRunner();
setTimeout(runner.run, 1000); // ❌ `this` is undefined

// ✅ Fix:
setTimeout(() => runner.run(), 1000);

