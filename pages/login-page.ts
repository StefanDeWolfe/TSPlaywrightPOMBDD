import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly hdrError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnLogin = this.page.getByTestId('login-button')
    this.hdrError = this.page.getByTestId('error')
    this.txtUsername = this.page.getByTestId('username')
    this.txtPassword = this.page.getByTestId('password')

  }

  async goto() {
    await this.page.goto(process.env.URL);
  }

  async login(username: string, password: string, ) {
    await this.txtUsername.fill(username) 
    await this.txtPassword.fill(password) 
    await this.btnLogin.click()
  }

  async expectLockout() {
    const lockoutErrorMessage = 'Epic sadface: Sorry, this user has been locked out.'
    await expect(this.hdrError).toHaveText(lockoutErrorMessage, {timeout: 3000});


  }
}