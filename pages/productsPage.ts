import { Locator, Page } from '@playwright/test';

export class ProductsPage {
  page: Page;
  itemTitle: Locator;
  buttonAddToCart: Locator;
  cartWithItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemTitle = page.locator('.inventory_item_name');
    this.buttonAddToCart = page.locator('.pricebar .btn_inventory');
    this.cartWithItems = page.locator('.shopping_cart_badge');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async addToCartAllItems() {
    await this.buttonAddToCart.click();
  }
}
