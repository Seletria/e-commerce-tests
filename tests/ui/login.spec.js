import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { users } from '../../utils/users.js';

test.describe('Login Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  })

  test('Login with valid username @smoke', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  })

  test('Login with locked out user username @regression', async ({ page }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');

    await loginPage.expectErrorMessage('Epic sadface: Sorry, this user has been locked out.');

  })

  test('Login with empty username @regression', async ({ page }) => {
    await loginPage.login('', 'secret_sauce');

    await loginPage.expectErrorMessage('Epic sadface: Username is required');
  })


})

