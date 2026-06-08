import { test, expect } from "../../fixtures/tests"
import { InventoryPage } from "../../pages/InventoryPage.js";
import { CartPage } from "../../pages/CartPage.js";
import { Checkoutpage } from "../../pages/CheckoutPage.js";
import { products } from "../../utils/products.js";

test.describe('Checkout flow', () => {

  test('Urun ekle ve satin al', async ({ authenticatedPage }) => {

    const inventoryPage = new InventoryPage(authenticatedPage);

    await inventoryPage.expectPageLoaded();
    await inventoryPage.ProductCard.addToCart(products.backpack);
    await inventoryPage.NavBar.clickCart();

    const cartPage = new CartPage(authenticatedPage);
    await cartPage.checkout();

    const checkoutPage = new Checkoutpage(authenticatedPage);
    await checkoutPage.fillForm('Test', 'denemesi', '1213123');
    await checkoutPage.continue();
    await checkoutPage.finish();
    await checkoutPage.expectOrderComplete();


  })
})