// @ts-check
const { test } = require('@playwright/test');

test.describe('typeface chat', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  const sendMessage = async (page, content) => {
    await page.getByRole('textbox').fill(content);
    await page.getByRole('button', { name: 'Send' }).click();
  }

  const sendReply = async (page, content) => {
    await page.getByRole('textbox').fill(content);
    await page.getByRole('button', { name: 'Reply' }).click();
  }

  test('send message', async ({ page }) => {
    const testMessage = 'Test Message'
    await page.getByRole('textbox').click();
    await sendMessage(page, testMessage);
    await page.getByText(testMessage);
  });

  test('send long message', async ({ page }) => {
    const testMessage = 'Test Message 12345678901234567890123456789012345678901234567890'
    await page.getByRole('textbox').click();
    await sendMessage(page, testMessage);
    await page.getByText(testMessage);
  });

  test('reply to message', async ({ page }) => {
    const testMessage = 'Test Message'
    const testReply = 'Test Reply'
    await page.getByRole('textbox').click();
    await sendMessage(page, testMessage);
    await page.getByText(testMessage).click();
    await sendReply(page, testReply);
    await page.getByText(testReply);
  });

  test('verify reply count', async ({ page }) => {
    const testMessage = 'Test Message'
    const testReply = 'Test Reply'
    await page.getByRole('textbox').click();
    await sendMessage(page, testMessage);
    await page.getByText(testMessage).click();
    await sendReply(page, testReply);
    await sendReply(page, testReply);
    await page.locator('div').filter({ hasText: /^Thread$/ }).getByRole('img').click();
    await page.getByText('2 Replies');
  });

  test('send multiple messages, should scroll to view', async ({ page }) => {
    await page.getByRole('textbox').click();
    for (let i = 0; i < 10; i++) {
      const testMessage = `Test Message ${i}`;
      await sendMessage(page, testMessage);
      await page.getByText(testMessage);
    }
  }); 

  test('send multiple replies, should scroll to view', async ({ page }) => {
    const testMessage = 'Test Message'
    await page.getByRole('textbox').click();
    await sendMessage(page, testMessage);
    await page.getByText(testMessage).click();
    for (let i = 0; i < 10; i++) {
      const testReply = `Test Reply ${i}`;
      await sendReply(page, testReply);
      await page.getByText(testReply);
    }
  }); 
});




