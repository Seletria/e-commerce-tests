import { expect } from '@playwright/test';

export class NavBar {

  constructor(page) {
    this.page = page;

    //sepet ikonu 
    this.cartIcon = page.locator('#shopping_cart_container');
    //sepetteki urun sayaci
    this.cartBadge = page.locator('.shopping_cart_badge');
    //sagdaki acilir hamburger menu
    this.menuButton = page.getByRole('button', { name: 'Open Menu' });
    //logout
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async clickCart() {
    await this.cartIcon.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  async getCartCount() {

    if (await this.cartBadge.isVisible()) {
      const badgeText = await this.cartBadge.textContent();
      return parseInt(badgeText, 10);

    } return 0;
  }

  async expectCartCount(count) {

    if (count === 0) {
      await expect(this.cartBadge).not.toBeVisible();
    } else {
      await expect(this.cartBadge).toHaveText(String(count));
    }
  }
}