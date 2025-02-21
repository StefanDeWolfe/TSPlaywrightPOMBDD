import { test as base, createBdd } from 'playwright-bdd'
import BasePage from '../pages/base-page'
import LoginPage from '../pages/login-page'
import ProductsPage from '../pages/products-page'
import CartPage from '../pages/my-cart-page'
import CheckoutPage from '../pages/checkout-page'

type MyFixtures = {
    basePage: BasePage,
    loginPage: LoginPage,
    productsPage: ProductsPage,
    checkoutPage: CheckoutPage,
    cartPage: CartPage
};

export const test = base.extend<MyFixtures>({
    basePage: async ({ page }, use) => use(new BasePage(page)),
    loginPage: async ({ page }, use) => use(new LoginPage(page)),
    productsPage: async ({ page }, use) => use(new ProductsPage(page)),
    cartPage: async ({ page }, use) => use(new CartPage(page)),
    checkoutPage: async ({ page }, use) => use(new CheckoutPage(page)),
});

export const { Given, When, Then } = createBdd(test);