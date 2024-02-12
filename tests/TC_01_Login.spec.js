const { test, expect } = require('@playwright/test');
const LoginPage = require('../test-function/LoginPage');
const usernames = require('../test-data/usernames');

test('Verify the user is successfully navigated to homepage after login', async ({ page }) => {
   const password = 'U8p!j!0LkKv1TcH';
   const loginPage = new LoginPage(page);
   
   for (const username of usernames) {
       await loginPage.login(username, password);
       const expectedURL = 'http://demo15.folio3.com:3004/home';
       const currentURL = page.url();
       console.log(currentURL)
       expect(currentURL).toContain(expectedURL);
   }
});