import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchInput;
    
    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('input[name="search"]');
    }

    async goto() {
        await this.page.goto('/ui');
    }
    
    async verifyHomePageLoaded() {
         await expect(this.page).toHaveTitle('Your Store');
         await expect(this.searchInput).toBeVisible();
    }
    
    async searchFor(product: string) {
        await this.searchInput.fill(product);
        await this.searchInput.press('Enter');

    }

}
