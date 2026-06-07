import { expect } from '@playwright/test';

export class Checkoutpage {

  constructor(page) {
    this.page = page
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.zipCode = page.locator('#postal-code');

    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');

    this.successMessage = page.locator('.complete-header');

  }

  async fillForm(firstName, lastName, zipCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.zipCode.fill(zipCode);
  }

  async continue() {
    await this.continueButton.click();
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async finish() {
    await this.finishButton.click();

  }

  async expectOrderComplete() {
    await expect(this.successMessage).toHaveText('Thank you for your order!');
  }


} 
