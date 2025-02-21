# PlaywrightExample
This is an example of a Playwright BDD test framework project, tesitng both APIs and GUIs.

# Example website
https://www.saucedemo.com/ for GUI testing.
https://reqres.in for API testing.

# Run test commands
To test the GUI, run the following commands:
```
npm test
pnpm test
```

To test the API, run the following commands:
```
```

# How I set this up (for future me)
```
npm init playwright@latest
npm install @playwright/test
npm install dotenv -D
npm install playwright -D
npm install playwright-bdd -D
npm install winston -D

```
With selection options:
-   Typescript
-   "tests" as test folder
-   No Git (setup later)
-   Yes, Install playwright browsers.

Copy created project into repo
Added "pages" folder for POM
Visited "https://playwright.dev/docs/pom" for POM page example
Visited "https://github.com/apatelia/playwright-with-bdd/blob/main/step-definitions/login.steps.ts" as an example project


# Login Test: login/login.feature
Basic login tests.
-   Login as a standard user
-   Login as a locked out user

# API tests: 
