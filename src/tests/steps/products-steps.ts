import { Given, Then, When } from '../fixtures/fixtures';

Then('The Products page is displayed', async ({productsPage}, webPage: string) => {
    console.log(`The "${webPage}" page is displayed`)
    productsPage.verifyPageTitle()
 });