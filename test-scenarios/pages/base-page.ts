import { Page } from "playwright";
import { type Locator, } from '@playwright/test';
export default class BasePage {

    protected readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }
    async waitForLoadState() {
        this.page.waitForLoadState()
    }
    async wait(){
        await this.page.waitForLoadState(); // The promise resolves after 'load' event.
        await this.page.waitForURL('**');
    }
    async verifyPageTitle() {
    this.wait()
    }
}