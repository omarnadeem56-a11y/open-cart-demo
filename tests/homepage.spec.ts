import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Homepage loads using Page Object', async ({page})=> {
   const homePage = new HomePage(page);
   await homePage.goto();
   await homePage.searchFor('Macbook');
   await expect(page.locator('h1')).toHaveText('Search - Macbook');


})