import { expect } from '@playwright/test';
import { ProductCard } from "../components/ProductCard";
import { NavBar } from "../components/Navbar";

export class CartPage {

  constructor(page) {
    this.page = page;

    this.Navbar = new NavBar(page);
    this.ProductCard = new ProductCard(page);
    this.itemList = page.locator('.cart_item');
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  async getItemCount() {
    return await this.itemList.count();
  }

  async continueShopping() {
    await this.page.locator('#continue-shopping').click();
  }

  async removeItem(productName) {
    const item = this.itemList
      .filter({ hasText: productName });

    await item.getByRole('button', { name: 'Remove' }).click();

  }

  async checkout() {
    await this.page.locator('#checkout').click();
  }

  async expectPageLoaded() {
    await expect(this.page).toHaveURL('/cart/');
    await expect(this.page.locator('.title')).toHaveText('Your Cart');
  }

}