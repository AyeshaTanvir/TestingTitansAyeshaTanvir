const { test, expect } = require('@playwright/test');
const LoginPage = require('../test-function/LoginPage');
const usernames = require('../test-data/usernames');
test('Verify property count is increased when a new property is added', async ({ page }) => {
   const password = 'U8p!j!0LkKv1TcH';
   const loginPage = new LoginPage(page);
   for (const username of usernames) {
    await loginPage.login(username, password);
         }
    await page.goto("http://demo15.folio3.com:3004/home");
    await page.locator('.icon-plus').click()
    await page.goto("http://demo15.folio3.com:3004/properties");
    await page.locator('.button').click()
    // await page.locator('#ap1-address-input input');
    // await page.locator('#ap1-nickname-input input');
    // await page.locator('#ap1-image-upload input[type="file"]');
    // await page.locator('#ap1-timezone-select select');
    // await page.fill('#ap1-address-input input', 'Death Valley');
    // await page.fill('#ap1-nickname-input input', 'Ayesha Property');
    // const inputUploadHandle = await page.$('input[type="file"]');
    // await inputUploadHandle.setInputFiles('D:/Automation/Testingtitans/test-data/proffesor.jpg');
    // await page.selectOption('#timezone', { label: 'Pacific Time / Los Angeles (UTC-8)' });
    // await page.click('button[type="submit"]');
    const propertyCountText = await page.textContent('.count');
    const regex = /\((\d+)\)/; 
    const match = propertyCountText.match(regex);
    expect(match).not.toBeNull();
    const count = parseInt(match[1]);
    expect(count).toBeGreaterThan(0);

});