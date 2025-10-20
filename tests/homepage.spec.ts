import { test, expect } from '@playwright/test';

test('OpenCart homepage should load sucessfully', async ({page})=> {
    await page.goto('/ui');
    await expect(page).toHaveTitle('Your Store');
    await expect(page.locator('input[name="search"]')).toBeVisible();

})