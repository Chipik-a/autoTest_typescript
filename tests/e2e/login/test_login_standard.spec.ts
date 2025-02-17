import { expect, test } from '@playwright/test';
import { HomePage } from '../../../pages/homePage.ts';
import { returnStandard } from '../../../data/users.ts';

test('Login standard user', async ({ page }) => {
  const homePage = new HomePage(page);
  const { email, password } = returnStandard();

  await homePage.goto('/');
  await homePage.login(email, password);

  await expect(page).toHaveTitle('Swag Labs');
});
