import { test, expect } from '../../fixtures/tests';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('', () => {

  let inventoryPage

  test.beforeEach(async ({ authenticatedPage }) => {
    inventoryPage = new InventoryPage(authenticatedPage);
    await inventoryPage.goto();
    await inventoryPage.expectPageLoaded();

  })

  test('Sort products A to Z', async () => {
    await inventoryPage.sortBy('Name (A to Z)');

    const products = await inventoryPage.getProductNames();
    const sortedProducts = [...products].sort();

    expect(products).toEqual(sortedProducts);
  });

  test('Sort products Z to A', async () => {
    await inventoryPage.sortBy('Name (Z to A)');

    const products = await inventoryPage.getProductNames();
    const sortedProducts = [...products].sort().reverse();

    expect(products).toEqual(sortedProducts);

  })

  test('Sort products price(low to high)', async () => {
    await inventoryPage.sortBy('Price (low to high)');

    const products = await inventoryPage.getProductPrice();
    const sortedProducts = [...products].sort((a, b) => a - b);

    expect(products).toEqual(sortedProducts);

  })

  test('Sort products price(high to low)', async () => {
    await inventoryPage.sortBy('Price (high to low)');

    const products = await inventoryPage.getProductPrice();
    const sortedProducts = [...products].sort((a, b) => b - a);

    expect(products).toEqual(sortedProducts);

  })
})