import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';
import { MyCartPage } from '../pages/my-cart-page';
import { CheckoutPage } from '../pages/checkout-page';
import { CheckoutPageHeaders } from '../fixtures/constants';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page)
  const products = new ProductsPage(page)
  const username = process.env.USER_NAME
  const password = process.env.PASSWORD
  // Runs before each test and signs in each page.
  await login.goto();
  await login.login(username, password)
  await products.verifyPageTitle();
});

test('Order a sause labs backpack and checkout', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const products = new ProductsPage(page)
  const myCart = new MyCartPage(page)
  const checkout = new CheckoutPage(page)
  const expectedItemToPurchase = 'sauce-labs-backpack'
  const expectedItemsInCart = '1'
  const expectedItemprice = '$29.99'
  const firstName = 'Automated_User_FN' // This will be randomly generated later
  const lastName = 'Automated_User_LN' // This will be randomly generated later
  const userZipCode = '12345' // This will be randomly generated later


  await products.addItemToCart(expectedItemToPurchase)
  await products.verifyItemsInCart(expectedItemsInCart)
  await products.clickCart()

  await myCart.verifyPageTitle()
  // TODO: Verify cart items. TBD
  await myCart.clickCheckout()


  await checkout.verifyPageTitleInformation(CheckoutPageHeaders.Information)
  await checkout.enterCheckoutInformation(firstName, lastName, userZipCode)
  await checkout.finishCheckout()
  await checkout.clickBackHome()
  await products.verifyPageTitle();
});
