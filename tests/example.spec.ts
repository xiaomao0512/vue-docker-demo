import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('button', { name: 'count is' }).click();
  await page.getByRole('heading', { name: 'Vite + Vue' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Vite logo' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Vue logo' }).click();
  const page2 = await page2Promise;
});