import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page)
  await login.goto();
});

test('Login as a standard user', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const username = process.env.USER_NAME // ?? "standard_user"
  const password = process.env.PASSWORD // ?? "secret_sauce"
  await loginPage.login(username, password)
  await productsPage.verifyPageTitle();
});

test('Login as a locked out user', async ({ page }) => {
  const login = new LoginPage(page)
  const products = new ProductsPage(page)
  const username = "locked_out_user"
  const password = process.env.PASSWORD
  await login.login(username, password)
  await page.waitForLoadState(); // The promise resolves after 'load' event.
  await login.expectLockout()
});
