import { expect } from '@playwright/test';
import { ProductCard } from "../components/ProductCard";
import { NavBar } from "../components/Navbar";


export class InventoryPage {

  constructor(page) {
    this.page = page;

    this.NavBar = new NavBar(page);
    this.ProductCard = new ProductCard(page);

    this.pageTitle = page.locator('[data-test="title"]');
    this.productSorter = page.locator('[data-test="product-sort-container"]');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async sortBy(option) {
    await this.productSorter.selectOption(option);
  }

  async getProductCount() {
    const inventoryItem = this.page.locator('.inventory_item');

    return await inventoryItem.count();
  }

  async expectPageLoaded() {

    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.pageTitle).toHaveText('Products');

  }

}