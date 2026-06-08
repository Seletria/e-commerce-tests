import { test, expect } from '../../fixtures/tests';
import { InventoryPage } from '../../pages/InventoryPage';
import { products } from '../../utils/products';

test.describe(() => {

  let inventoryPage;
  test.beforeEach(async ({ authenticatedPage }) => {
    inventoryPage = new InventoryPage(authenticatedPage);
    await inventoryPage.goto();
    await inventoryPage.expectPageLoaded();

  })

  test('should add the selected product to the shopping cart @smoke', async ({ authenticatedPage }) => {
    await inventoryPage.ProductCard.addToCart('Sauce Labs Backpack');
    const badgeCount = await inventoryPage.NavBar.getCartCount();

    await inventoryPage.NavBar.expectCartCount(1);

  })

  test('should remove the product from the cart when delete button is clicked @smoke', async ({ authenticatedPage }) => {
    await inventoryPage.ProductCard.addToCart('Sauce Labs Backpack');
    await inventoryPage.ProductCard.removeFromCart('Sauce Labs Backpack');

    await inventoryPage.NavBar.expectCartCount(0);

  })

  test('should correctly update the quantity of items in the cart @regression', async ({ authenticatedPage }) => {
    await inventoryPage.ProductCard.addToCart(products.backpack);
    await inventoryPage.ProductCard.addToCart(products.bikeLight);
    await inventoryPage.ProductCard.addToCart(products.tshirt);

    await inventoryPage.NavBar.expectCartCount(3);

    await inventoryPage.ProductCard.removeFromCart(products.bikeLight);

    await inventoryPage.NavBar.expectCartCount(2);

  })

})