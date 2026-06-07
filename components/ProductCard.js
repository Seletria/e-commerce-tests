export class ProductCard {
  constructor(page) {
    this.page = page;
  }

  getAddToCartId(productName) {
    const formatted = productName.toLowerCase().replace(/ /g, "-");
    return `#add-to-cart-${formatted}`;
  }

  async addToCart(productName) {
    await this.page.locator(this.getAddToCartId(productName)).click();
  }

  removeFromCartId(productName) {
    const formatted = productName.toLowerCase().replace(/ /g, "-");
    return `#remove-${formatted}`;
  }

  async removeFromCart(productName) {
    await this.page.locator(this.removeFromCartId(productName)).click();
  }

  async getPrice(productName) {
    const card = this.page.locator('.inventory_item').filter({ hasText: productName });
    const price = card.locator('.inventory_item_price');

    const priceText = await price.textContent();
    const onlyPrice = priceText.slice(1);

    return parseFloat(onlyPrice);

  }
}