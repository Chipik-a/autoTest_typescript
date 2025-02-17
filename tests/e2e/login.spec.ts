import { test } from '../fixtures/auth.fixtures.ts';
import { expect } from '@playwright/test';
import { testUsers } from '../../data/users.ts';
import { HomePage } from '../../pages/homePage.ts';
import path from 'node:path';
import * as fs from 'node:fs';

const authDir = path.join(__dirname, '../../auth');
if (!fs.existsSync(authDir)) {
  fs.mkdirSync(authDir, { recursive: true });
}
const users = [testUsers.standardUser, testUsers.visualUser];

users.forEach((user) => {
  test(`Login test for ${user.email}`, async ({
    page,
    checkStorageStateFiles,
  }: {
    page: any;
    checkStorageStateFiles: Record<string, boolean>;
  }) => {
    const storageStatePath = path.join(authDir, `${user.email}.json`);
    const homePage = new HomePage(page);
    const { email, password } = user;
    await homePage.goto('/');

    await homePage.login(email, password);

    await page.context().storageState({ path: storageStatePath });
    await expect(page).toHaveTitle('Swag Labs');

    expect(checkStorageStateFiles[user.email]).toBe(true);
    console.log(`file was created for ${user.email}`);
  });
});
