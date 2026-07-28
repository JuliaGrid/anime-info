import { test, expect } from '@playwright/test';

test('User search. Server error', async ({ page }) => {
  await page.goto('/');
  const searchInput = page.locator('input[type="text"]');
  //await page.fill('input[type="text"]', 'Naruto');
  await searchInput.pressSequentially('Naruto', { delay: 150 });
  await page.press('input[type="text"]', 'Enter');
  await page.route('**/api/anime?q=Naruto', (route) => {
    route.fulfill({
      status: 504,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    });
  });
  await expect(page.getByText('Error')).toBeVisible();
});

// test('User search', async ({ page }) => {
//     await page.goto('/');
//     const searchInput = page.locator('input[type="text"]');
//     await searchInput.pressSequentially('Naruto', { delay: 150 });
//     await page.press('input[type="text"]', 'Enter');
//     await expect(page.getByText("Naruto")).toBeVisible();
// })
