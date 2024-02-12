class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.goto("http://demo15.folio3.com:3004/");
        await this.page.locator('#email').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator("button[type='submit']").click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = LoginPage;