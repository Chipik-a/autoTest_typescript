// import { HomePage } from './pages/homePage';
// import { chromium } from 'playwright';
//
// async function globalSetup() {
//   const browser = await chromium.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
//
//   const homePage = new HomePage(page);
//   const { email, password } = user;
//
//   await homePage.goto('/');
//   await homePage.login(email, password);
//
//   await page.context().storageState({ path: storageStatePath });
// }
