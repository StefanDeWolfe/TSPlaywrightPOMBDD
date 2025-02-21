import { Given, Then, When } from '../fixtures/fixtures';

Given('The user navigates to the login page', async ({loginPage}) => {
    console.log('The user navigates to the login page')
    await loginPage.goto()
 });
 
 When('The user enters in {string} and {string}', async ({loginPage}, username: string, password: string) => {
    console.log(`The user enters in "${username}" and "${password}"`)
    await loginPage.login(username, password)
    
 });
 
 Then('The Login page is displayed', async ({loginPage}, webPage: string) => {
    console.log(`The "${webPage}" page is displayed`)
    loginPage.verifyPageTitle()
 });
 
 Then('The "{string}" error is displayed', async function ({loginPage},errorMessage: string) {
    console.log(`The "${errorMessage}" error is displayed`)
    await loginPage.waitForLoadState() // The promise resolves after 'load' event.
    if (errorMessage.toLowerCase() == 'lockedout'){
        await loginPage.expectLockout()
    } else {
        console.error(`Unrecognized error: "${errorMessage}"`)
    }
 });