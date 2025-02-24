import { test as base, createBdd } from 'playwright-bdd'
import BasePage from '../pages/base-page'
import LoginPage from '../pages/login-page'
import ProductsPage from '../pages/products-page'
import CartPage from '../pages/my-cart-page'
import CheckoutPage from '../pages/checkout-page'
import BaseApi from '../api/pages/base-api'
import LoginApi from '../api/pages/login-api'

type MyFixtures = {
    basePage: BasePage,
    loginPage: LoginPage,
    productsPage: ProductsPage,
    checkoutPage: CheckoutPage,
    cartPage: CartPage,
    baseApi: BaseApi,
    loginApi: LoginApi,
};

export const test = base.extend<MyFixtures>({
    // GUI Pages
    basePage: async ({ page }, use) => use(new BasePage(page)),
    loginPage: async ({ page }, use) => use(new LoginPage(page)),
    productsPage: async ({ page }, use) => use(new ProductsPage(page)),
    cartPage: async ({ page }, use) => use(new CartPage(page)),
    checkoutPage: async ({ page }, use) => use(new CheckoutPage(page)),
    // API endpoints
    // baseApi: async ({ request }, use) => use(new BaseApi(request)),
    loginApi: async ({ request }, use) => use(new LoginApi(request)),
});

export const { Given, When, Then } = createBdd(test);