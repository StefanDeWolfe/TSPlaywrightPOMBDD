import {Given, Then, When } from '../../utils/fixtures';


Given('The user sets up a POST register request with {string} and {string}', async ({}, username: string, password: string) => {
    console.log(`The user sets up a POST register request with ${username} and ${password}`)
 });