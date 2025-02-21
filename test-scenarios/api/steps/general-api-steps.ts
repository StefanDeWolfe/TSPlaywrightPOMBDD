import {Given, When, Then } from '../../utils/fixtures';
import fetch from 'node-fetch';
import {
    POST_METHOD,
    END_POINT_API_REGISTER,
    REQRES_URL,
    CreateUserResponse,
    DEFAULT_HEADERS
} from '../test-data/constants-api'
import { LOGGER } from '../../utils/Logger';


When('The user sends POST http request', async ({}) => {
    LOGGER.info('The user sends POST http request')
    // const response = await fetch(new URL(REQRES_URL, END_POINT_API_REGISTER).href, {
    //     method: POST_METHOD,
    //     body: JSON.stringify({
    //         email: process.env.USER_NAME,
    //         password: process.env.PASSWORD,
    //     }),
    //     headers: DEFAULT_HEADERS,
    // });

    // if (!response.ok) {
    //     LOGGER.error(`Error! status: ${response.status}`)
    // }
    // const result = (await response.json()) as CreateUserResponse;

    // LOGGER.info('result is: ', JSON.stringify(result, null, 4));

    // return result;
 });
 
 Then('The user receives valid Response', async ({}) => {
    LOGGER.info(`The user receives valid Response`)
 });
 