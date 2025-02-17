import { test } from '@playwright/test';
import { HomePage } from '../../../pages/homePage.ts';
import { standardUser } from '../../../data/users.ts';
test('Login standard user', async ({ page }) => { });
const homePage = new HomePage(page);
const { email, password } = standardUser;
