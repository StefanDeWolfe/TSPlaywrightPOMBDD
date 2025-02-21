import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: [
        './test-scenarios/features/**/*.feature', 
        './test-scenarios/api/features/**/*.feature'
    ],
    steps: [ 
        './test-scenarios/steps/*.ts', 
        './test-scenarios/steps/**/*.ts', 
        './test-scenarios/utils/fixtures.ts',
        './test-scenarios/api/steps/*.ts', 
        './test-scenarios/api/steps/**/*.ts', 
    ]
});

export default defineConfig({
    // Test directory value is automatically handled by playwright-bdd.
    testDir,

    // Run all tests in parallel.
    fullyParallel: true,

    // Fail the build on CI if you accidentally left test.only in the source code.
    forbidOnly: !!process.env.CI,

    // Retry on CI only.
    retries: process.env.CI ? 2 : 0,

    // Opt out of parallel tests on CI.
    workers: process.env.CI ? 1 : undefined,

    // Reporter to use
    reporter: [
        [ './test-scenarios/utils/CustomReporter.ts' ],
        [ 'html', { outputFolder: 'reports/playwright/' } ],
        cucumberReporter('html', { outputFile: 'reports/cucumber/index.html' }),
    ],


    use: {
        // Capture screenshot when a test fails.
        screenshot: 'on',
        video: 'on',
        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',
        // Run Headless
        headless: false,
        // Custom TestID 
        testIdAttribute: 'data-test',
        // Base URL to use in actions like `await page.goto('/')`.
        // baseURL: 'http://127.0.0.1:3000',
        extraHTTPHeaders: {
            // We set this header per GitHub guidelines.
            'Accept': 'application/vnd.github.v3+json',
            // Add authorization token to all requests.
            // Assuming personal access token available in the environment.
            'Authorization': `token ${process.env.API_TOKEN}`,
          },
    },

    // Configure projects for major browsers.
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices[ 'Desktop Chrome' ],
                channel: 'chromium'
            },
        },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },

        /* Test against mobile viewports. */
        // {
        //     name: 'Mobile Chrome',
        //     use: { ...devices['Pixel 5'] },
        // },
        // {
        //     name: 'Mobile Safari',
        //     use: { ...devices['iPhone 14 Pro Max'] },
        // },
    ],
});