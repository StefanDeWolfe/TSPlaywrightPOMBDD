import { Page } from "playwright";
export default class BasePage {

    protected readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }
    

    async wait(){
        await this.page.waitForLoadState(); // The promise resolves after 'load' event.
        await this.page.waitForURL('**');
    }
    async verifyPageTitle() {
    this.wait()
    }
}