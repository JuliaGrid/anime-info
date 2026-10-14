import test, { expect } from 'playwright/test';

test('test pg', async ({ page }) => {
  await page.goto('/test');

  const newPageState = page.waitForEvent('popup');

  await page.locator('//button[contains(text(), "логин")]').click();

  const newPage = await newPageState;

  expect(newPage.locator('//h1')).toHaveText('Вход');
});
