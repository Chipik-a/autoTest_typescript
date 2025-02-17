import path from 'node:path';
import * as fs from 'node:fs';
import { test as base } from '@playwright/test';
import { testUsers } from '../../data/users.js';

const authDir = path.join(__dirname, '../../auth');

if (!fs.existsSync(authDir)) {
  fs.mkdirSync(authDir, { recursive: true });
}

type AuthFixtures = {
  checkStorageStateFiles: Record<string, boolean>;
};

export const test = base.extend<AuthFixtures>({
  checkStorageStateFiles: async ({}, use) => {
    const storageStateExists: Record<string, boolean> = {};

    for (const user of Object.values(testUsers)) {
      const storageStatePath = path.join(authDir, `${user.email}.json`);
      storageStateExists[user.email] = fs.existsSync(storageStatePath);
    }
    await use(storageStateExists);
  },
});
