let {defineSupportCode} = require('cucumber');
//let Helper = require('./test/support/helper');

defineSupportCode(function ({Before, setDefaultTimeout, After}) {
    setDefaultTimeout(60000);

    Before(function () {
    browser.driver.manage().window().maximize();
    });
   
    After(function (scenario) {
        let self = this;
        if (scenario.result.status !== 'passed') {
            return browser.takeScreenshot()
                .then(function (png) {
                    return self.attach(png, 'image/png');
                });
        }
    });
});
