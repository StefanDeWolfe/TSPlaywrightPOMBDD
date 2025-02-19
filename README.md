# PlaywrightExample
This is an example of a Playwright test framework project

# Example website
https://www.saucedemo.com/

# Run test commands
Some commands to run to see if its working
```
npx playwright test [test file]
npx playwright test login.spec.ts --project firefox --headed
npx playwright test -g "Login as a standard user"
npx playwright test -g "Login as a standard user" --project firefox --headed
```

# How I set this up (for future me)
```
npm init playwright@latest
```
With selection options:
-   Typescript
-   "tests" as test folder
-   No Git (setup later)
-   Yes, Install playwright browsers.

Copy created project into repo
Added "pages" folder for POM
Visited "https://playwright.dev/docs/pom" for POM page example


# Login Test: login.spec.js
Basic login tests.
-   Login as a standard user
