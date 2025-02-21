# PlaywrightExample
This is an example of a Playwright BDD test framework project

# Example website
https://www.saucedemo.com/

# Run test commands
Some commands to run to see if its working
```
npm test
```

# How I set this up (for future me)
```
npm init playwright@latest
npm install playwright
npm install @playwright/test
npm install ts-node
npm install @cucumber/cucumber
npm install dotenv

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


# Login Test: login.spec.js
Basic login tests.
-   Login as a standard user
-   Login as a locked out user
