import { expect, type Locator, type Page } from '@playwright/test';
import BasePage  from "../pages/base-page";
import { BASE_URL} from "../test-data/constants"
export default class ProductsPage extends BasePage {
  readonly btnAddItemToCart: (itemId:string) => Locator;
  readonly lnkShoppingCart:Locator;
  readonly lnkShoppingCartBadge:Locator;
  readonly spanPageTitle: Locator;

  constructor(page: Page) {
    super(page)
    this.spanPageTitle = this.page.getByTestId("title")
    this.lnkShoppingCart = this.page.getByTestId("shopping-cart-link")
    this.lnkShoppingCartBadge = this.page.getByTestId("shopping-cart-badge")
    this.btnAddItemToCart = (itemId) => this.page.getByTestId(`add-to-cart-${itemId}`)
     
  }
  
  async wait(){
      await this.page.waitForLoadState(); // The promise resolves after 'load' event.
      await this.page.waitForURL('**/inventory.html');
  }

  async goto() {
    await this.page.goto(new URL(process.env.URL ?? BASE_URL, '/inventory.html').href);
  }

  async addItemToCart(itemId: string) {
    await this.btnAddItemToCart(itemId).click()
  }

  async clickCart() {
    await this.lnkShoppingCart.click()
  }

  async verifyPageTitle() {
    const productPageHeader  = "Products"
    await expect(this.spanPageTitle).toBeVisible({timeout: 3000});
    await expect(this.spanPageTitle).toHaveText(productPageHeader, {timeout: 3000});
  }

  async verifyItemsInCart(itemsInCart: number | string) {
    const productPageHeader  = "Products"
    await expect(this.lnkShoppingCartBadge).toBeVisible({timeout: 3000});
    await expect(this.lnkShoppingCartBadge).toHaveText(itemsInCart.toString(), {timeout: 3000});
  }
}