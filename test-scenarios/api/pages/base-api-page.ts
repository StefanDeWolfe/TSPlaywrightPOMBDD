import { Page } from "playwright";
export default class BaseApiPage {

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