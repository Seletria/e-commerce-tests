import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { users } from '../utils/users.js';

export const test = base.extend({

  authenticatedPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await use(page);
  }
});

export { expect } from '@playwright/test';
