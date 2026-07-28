import { test, expect } from '@playwright/test';

test('Main page. Screenshot.', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('AnimeList')).toBeVisible();
  await expect(page).toHaveScreenshot('main-page.png');
});
