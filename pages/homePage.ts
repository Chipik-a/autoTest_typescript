import { Locator, Page } from '@playwright/test';

export class HomePage {
  page: Page;
  buttonLogin: Locator;
  errorMessage: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonLogin = page.locator('#login-button');
    this.errorMessage = page.locator('h3[data-test="error"]');
    this.emailInput = page.locator('input[name="user-name"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('input[name="login-button"]');
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.buttonLogin.click();
  }
}
