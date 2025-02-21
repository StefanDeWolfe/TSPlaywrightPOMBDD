import { Given, Then, When } from '../utils/fixtures';
import { LOGGER } from '../utils/Logger';
Given('The user navigates to the login page', async ({loginPage}) => {
   LOGGER.info('The user navigates to the login page')
   await loginPage.goto()
 });
 
 When('The user enters {string} and {string}', async ({loginPage}, username: string, password: string) => {
   LOGGER.info(`The user enters "${username}" and "${password}"`)
   await loginPage.login(username, password)
    
 });
 
 Then('The Login page is displayed', async ({loginPage}) => {
   LOGGER.info(`The Login page is displayed`)
   loginPage.verifyPageTitle()
 });
 
 Then('The {string} error is displayed', async ({loginPage}, errorMessage: string) => {
   LOGGER.info(`The "${errorMessage}" error is displayed`)
   await loginPage.wait() // The promise resolves after 'load' event.
   if (errorMessage.toLowerCase() == 'lockedout'){
      await loginPage.expectLockout()
   } else if (errorMessage.toLowerCase() == 'badusernamepassword'){
      await loginPage.expectBadUsernamePassword()
   } else {
      console.error(`Unrecognized error: "${errorMessage}"`)
   }
 });