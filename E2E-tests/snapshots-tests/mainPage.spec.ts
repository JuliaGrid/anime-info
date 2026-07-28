import { test, expect } from '@playwright/test';
import MainPage from '../pages/mainPage';

test('Main page. Screenshot.', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await expect(mainPage.title).toBeVisible();
  await expect(page).toHaveScreenshot('main-page.png');
});
