import { test, expect } from '@playwright/test';

test('User login', async ({ page }) => {
  page.goto('/login');

  const loginInput = page.getByRole('textbox', { name: 'Логин' });
  const passwordInput = page.locator('//input[@name = "password"]');
  const button = page.getByRole('button', { name: 'Войти' });

  await expect(button).toBeDisabled();

  await loginInput.fill('');
  await expect(button).toBeDisabled();

  await loginInput.fill('');
  await passwordInput.fill('1');
  await passwordInput.blur();
  await expect(button).toBeDisabled();
  await expect(page.getByText('Введите логин')).toBeVisible();
  await expect(
    page.getByText('Пароль должен содержать минимум 6 символов')
  ).toBeVisible();

  await passwordInput.fill('');
  await expect(button).toBeDisabled();
  await expect(page.getByText('Введите пароль')).toBeVisible();

  await loginInput.fill('qwerty');
  await passwordInput.fill('111111');
  await expect(button).not.toBeDisabled();
});
