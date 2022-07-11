import { expect, test } from '@playwright/test';

test('test fetching', async ({ page }) => {
  await page.goto('/');
  await page.locator('#pictureDog').click();
  expect(await page.textContent('#dogImg')).not.toBeNull();
});
