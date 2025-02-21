import { Page } from "playwright";
import { type Locator, } from '@playwright/test';
export default class BasePage {

    protected readonly page: Page;

    constructor(page:Page) {
        this.page = page;
    }
}