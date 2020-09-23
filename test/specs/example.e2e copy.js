const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.setWindowSize(1500, 900);
        browser.url("https://stagedemo.oryxgaming.com/sportsbook");
        $('.is-active .navigation-title').waitForDisplayed(20000);
    });
});


