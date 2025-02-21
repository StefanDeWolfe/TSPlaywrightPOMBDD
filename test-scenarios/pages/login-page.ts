import { expect, type Locator, type Page } from '@playwright/test';
import BasePage  from "../pages/base-page";
import {LOCKOUT_ERROR_MESSAGE, BASE_URL} from "../test-data/constants"

export default class LoginPage extends BasePage {
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly hdrError: Locator;

  constructor(page: Page) {
    super(page)
    this.btnLogin = this.page.getByTestId('login-button')
    this.hdrError = this.page.getByTestId('error')
    this.txtUsername = this.page.getByTestId('username')
    this.txtPassword = this.page.getByTestId('password')

  }

  async wait(){
      await this.page.waitForLoadState(); // The promise resolves after 'load' event.
      await this.page.waitForURL('**');
  }

  async goto() {
    // @ts-ignore
    await this.page.goto(process.env.URL ?? BASE_URL);
  }

  async login(username: string, password: string, ) {
    await this.txtUsername.fill(username) 
    await this.txtPassword.fill(password) 
    await this.btnLogin.click()
  }

  async expectLockout() {
    
    await expect(this.hdrError).toHaveText(LOCKOUT_ERROR_MESSAGE, {timeout: 3000});
  }

  async verifyPageTitle() {
    this.wait()
    await expect(this.btnLogin).toBeVisible({timeout: 3000});
  }
}