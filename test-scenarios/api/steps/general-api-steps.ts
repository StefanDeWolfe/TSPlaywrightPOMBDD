import {Given, When, Then } from '../../utils/fixtures';
import {
    POST_METHOD,
    END_POINT_API_REGISTER,
    REQRES_URL,
    CreateUserResponse,
    DEFAULT_HEADERS
} from '../test-data/constants-api'
import { LOGGER } from '../../utils/Logger';


// When('The user sends POST http request', async ({baseApi}) => {
//     LOGGER.info('The user sends POST http request')
//     baseApi.post()
//  });
 
//  Then('The user receives valid Response', async ({baseApi}) => {
//     LOGGER.info(`The user receives valid Response`)
//     baseApi.expectResponseOk()
//  });
 