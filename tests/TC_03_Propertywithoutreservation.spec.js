const { test, expect } = require('@playwright/test');
const LoginPage = require('../test-function/LoginPage');
const usernames = require('../test-data/usernames');
test('Verify property without reservation dialogue is coming right', async ({ page }) => {
   const password = 'U8p!j!0LkKv1TcH';
   const loginPage = new LoginPage(page);
   for (const username of usernames) {
    await loginPage.login(username, password);
         }
    await page.goto("http://demo15.folio3.com:3004/home");
    await page.locator('.icon-plus').click()
    await page.goto("http://demo15.folio3.com:3004/properties");
    await page.locator('.button').click()
    const propertyCountText = await page.textContent('.count');
    const regex = /\((\d+)\)/; 
    const match = propertyCountText.match(regex);
    expect(match).not.toBeNull();
    const count = parseInt(match[1]);
    expect(count).toBeGreaterThan(0);
    await page.goto("http://demo15.folio3.com:3004/home");
    await page.waitForSelector('div[class="reservation-card"] p:nth-child(1)');
    const reservationCountText = await page.textContent('div[class="reservation-card"] p:nth-child(1)');
    expect(reservationCountText).toContain('2 properties currently do not have reservations.');

});