import { expect, type Locator, type Page } from '@playwright/test';
import BaseApiPage  from "./base-api-page";

export default class LoginApiPage extends BaseApiPage {

  constructor(page: Page) {
    super(page)
  }

}