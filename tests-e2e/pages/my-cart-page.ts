import { expect, type Locator, type Page } from '@playwright/test';

export class MyCartPage {
  readonly page: Page;
  readonly btnCheckout: Locator
  readonly spanPageTitle: Locator
  readonly divItemQuantity: Locator

  constructor(page: Page) {
    this.page = page;
    this.spanPageTitle = this.page.getByTestId("title")
    this.btnCheckout = this.page.getByTestId("checkout")
  }

  async wait(){
      await this.page.waitForLoadState(); // The promise resolves after 'load' event.
      await this.page.waitForURL('**/cart.html');
  }

  async goto() {
    await this.page.goto(new URL(process.env.URL, '/cart.html').href);
  }

  async clickCheckout() {
    this.wait()
    await this.btnCheckout.click()
  }

  async validateItemQuantity() {

  }

  async verifyPageTitle() {
    this.wait()
    const productPageHeader  = "Your Cart"
    await expect(this.spanPageTitle).toBeVisible({timeout: 3000});
    await expect(this.spanPageTitle).toHaveText(productPageHeader, {timeout: 3000});
  }
}