import {Given, Then, When } from '../../utils/fixtures';


Given('The user sets up a POST login request with {string} and {string}', async ({loginApiPage}, username: string, password: string) => {
    console.log(`The user sets up a POST login request with ${username} and ${password}`)
 });