import { expect, test } from '@playwright/test';
//import { test } from '../../fixtures/auth.fixtures.ts';
import { ProductsPage } from '../../../pages/productsPage.js';

test.use({ storageState: './auth/visual_user.json' });
test('Add to Cart All Items', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto('/inventory.html');

  for (const button of await productsPage.buttonAddToCart.all()) {
    await button.click();
  }
  const cartBadge = page.locator('.shopping_cart_badge');
  const badgeText = await cartBadge.textContent();
  expect(Number(badgeText)).toBeGreaterThan(1);
});
