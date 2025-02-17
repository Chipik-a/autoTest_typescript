import { expect, test } from '@playwright/test';
import { HomePage } from '../../../pages/homePage.ts';
import { returnLocked } from '../../../data/users.ts';

test('Login locked out user', async ({ page }) => {
  const homePage = new HomePage(page);
  const { email, password } = returnLocked();

  await page.goto('/');
  await homePage.login(email, password);

  await expect(homePage.errorMessage).toBeVisible();
});
