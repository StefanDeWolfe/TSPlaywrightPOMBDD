import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../fixtures/pageFixture';
import  LoginPage  from "../pages/login-page";
import  ProductsPage  from "../pages/products-page";

let login: LoginPage
let products: ProductsPage

Given('The user navigates to the login page', async function () {
    console.log('The user navigates to the login page')
    login = new LoginPage(pageFixture.page)
    await login.goto()
    return true
 })
 
 When('The user enters in "{username}" and "{password}"', async function (username: string, password: string) {
    console.log(`The user enters in "${username}" and "${password}"`)
    login = new LoginPage(pageFixture.page)
    await login.login(username, password)
    return true
    
 })
 
 Then('The "<webPage>" is displayed', async function (webPage: string) {
    console.log(`The "${webPage}" is displayed`)
    login = new LoginPage(pageFixture.page)
     products = new ProductsPage(pageFixture.page)
    switch(webPage.toLowerCase()) {
        case "login": 
            await login.verifyPageTitle()
            break
        case "products": 
            await products.verifyPageTitle()
            break
        default: 
        console.error(`Unrecognized webpage: "${webPage}"`)
            break
    }
    return true
 })
 
//  Then('The <errorMessage> error is displayed', async function (errorMessage: string) {
//     console.log(`The "${errorMessage}" error is displayed`)
//     const login = new LoginPage(pageFixture.page)
//     await pageFixture.page.waitForLoadState() // The promise resolves after 'load' event.
//     if (errorMessage.toLowerCase() == 'lockedout'){
//         await login.expectLockout()
//     } else {
//         console.error(`Unrecognized error: "${errorMessage}"`)
//     }
//  return true
//  })