const { test, expect } = require('@playwright/test');
const LoginPage = require('../test-function/LoginPage');
const usernames = require('../test-data/usernames');
test('Verify side drawer is clicked when clicking view info', async ({ page }) => {
   const password = 'U8p!j!0LkKv1TcH';
   const loginPage = new LoginPage(page);
   for (const username of usernames) {
    await loginPage.login(username, password);
         }
    await page.goto("http://demo15.folio3.com:3004/home");
    const link = await page.waitForSelector('a:has-text("View Info >")');
await link.click();
const heading = await page.getByRole('heading', { name: 'Set up reservations' });
// Check if the heading is found
if (heading) {
    console.log('Heading "Set up reservations" found!');
} else {
    console.log('Heading "Set up reservations" not found!');
}
});