import { Given, Then, When } from '../utils/fixtures';
import { LOGGER } from '../utils/Logger';

Then('The Products page is displayed', async ({productsPage}) => {
    LOGGER.info(`The Products page is displayed`)
    productsPage.verifyPageTitle()
 });