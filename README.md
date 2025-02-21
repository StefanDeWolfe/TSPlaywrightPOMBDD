# PlaywrightExample
This is an example of a Playwright BDD test framework project, tesitng both APIs and GUIs.

# Example website
https://www.saucedemo.com/ for GUI testing.
https://reqres.in for API testing.

# To setup this project for yourself.
Clone or pull down the zip archive, and unzip it.
Open the root directory in VS Code. Create a new terminal.
Run the following commands:
```
npm install
```
Now, you $hould have all the modules/libraries installed.

# Run test commands
To test the GUI, run the following commands:
```
npm test
pnpm test
pnpm tagged-test "@login"
```

To test the API, run the following commands (TBD):
```
pnpm tagged-test "@login-api"
```

# How I set this up (for future me or you)
```
npm init playwright@latest
npm install @playwright/test
npm install dotenv -D
npm install playwright -D
npm install playwright-bdd -D
npm install winston -D
npm install node-fetch -D 
```
With selection options for (npm init playwright@latest):
-   Typescript
-   "test-scenarios" as test folder
-   No Git (setup later)
-   Yes, Install playwright browsers.

Copy created project into a repo that you already created on Github or your prefered storage site.
Added folders to organize your project.
Visited "https://playwright.dev/docs/pom" for POM page example.
Visited "https://github.com/apatelia/playwright-with-bdd/blob/main/step-definitions/login.steps.ts" as an example project for getting BDD functionality working right.


# Login Test: login/login.feature
Basic login tests.
-   Login as a standard user
-   Login as a locked out user

# API tests: 
