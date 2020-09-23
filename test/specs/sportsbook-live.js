describe('Testing Sportsbook Live Betting', () => {
    it('Open live betting', () => {
        browser.setWindowSize(1500, 900);
        browser.url();
        $('.is-active .navigation-title').waitForDisplayed(20000);
    });

    
    it('Click on couple of bets', () => {
        $('.sb-live-overview-available-sport-container.active').waitForDisplayed({timeout: 20000});
        var tabs = browser.$$('.sb-live-overview-available-sports-list-container-wrapper .sb-live-overview-available-sport-container');
        console.log('Number of tabs - ' + tabs.length);

        for (i = 0; i < tabs.length; i++) {
            tabs[i].click();
            browser.pause(2000);
        }

        if (tabs.length > 1) {
            tabs[1].click();
        }
    });

    it('Stay on page', () => {
        // Currently is 10s, increase it to your need
        // If error, increase mochaOpts -> timeout in wdio.conf.js file
        browser.pause(10000);
    });
});
