import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const username = process.env.USER_NAME ?? "standard_user"
  const password = process.env.PASSWORD ?? "secret_sauce"
  // Runs before each test and signs in each page.
  await loginPage.goto();
  await loginPage.login(username, password)
  await productsPage.verifyHeader();
});

test('has title', async ({ page }) => {
  
});
