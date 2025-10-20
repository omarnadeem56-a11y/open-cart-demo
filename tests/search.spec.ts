import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import searchData from '../data/searchData.json';

for (const data of searchData) {
    test(`Search for ${data.term} and verify results`, async ({page})=> {
         const homePage = new HomePage(page);
         await homePage.goto();
         await homePage.searchFor(data.term);
         await expect(page.locator('h1')).toHaveText(`Search - ${data.term}`);
    });
}