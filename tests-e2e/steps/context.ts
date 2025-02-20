import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';
const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
//launch url
const url = process.env.URL


Given('The user navigates to the login page', async function () {
    console.log('The user navigates to the login page')
    const login = new LoginPage(page)
    await login.goto();
 })
 
 When('The user enters in "{username}" and "{password}"',async function (username: string, password: string) {
    console.log(`The user enters in "${username}" and "${password}"`)
    const loginPage = new LoginPage(page)
    await loginPage.login(username, password)
    
 })
 
 Then('The "<webPage>" is displayed',async function (webPage) {
    console.log(`The "${webPage}" is displayed`)
    const productsPage = new ProductsPage(page)
    switch(webPage.toLowerCase()) {
        case "products": 
            await productsPage.verifyPageTitle();
            break;
        case "products": 
            await productsPage.verifyPageTitle();
            break;
        default: 
        console.error(`Unrecognized webpage: "${webPage}"`)
            break;
    }
    
 })