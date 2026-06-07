import { test, expect } from "../../fixtures/tests"
import { InventoryPage } from "../../pages/InventoryPage.js";
import { CartPage } from "../../pages/CartPage.js";
import { Checkoutpage } from "../../pages/CheckoutPage.js";

test.describe('Checkout flow', () => {

  test('Urun ekle ve satin al', async ({ authenticatedPage }) => {

    const inventoryPage = new InventoryPage(authenticatedPage);


  })
})