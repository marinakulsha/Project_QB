let moment = require('moment');

let platforms = {
    mobile: '--window-size=500,800',
    desktop: '--window-size=1280,800'
};

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['features/FeatureHome.feature'],

    'capabilities': {
    //'browserstack.user': 'marina281',
    //'browserstack.key': 'tsuASfyNotsCV3fSCqqL',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'chrome',
    'browser_version': '61.0',
    'resolution': '1024x768',
    // 'browserName': 'safari',
    // 'device': 'iPhone 7 Plus',
    // 'realMobile': 'true',
    // 'os_version': '10.0',
    // 'os': 'Windows',
    //'os_version': '10',
    //'browserName': 'Chrome',
    //'browser_version': '61.0',
    //'resolution': '1920x1080',
    'metadata': {
            'app':{
                'name': moment().format('DD-MM-YYYY HH:mm:ss'),
                'version': '',
            },
            "device": 'desktop',
            "platform": {
                "name": 'Windows',
                "version": "10.0"
            }
        }
    },
    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            'support/world.js',
            'step_difinitions/*.js'
        ],
        format: 'json:test/reports/cucumber/report.json',
        strict: true
    },
    plugins: [
        {
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                reportName: 'Dynamo Website Report (mydynamo.co.uk)',
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                openReportInBrowser: true,
                jsonOutputPath: './test/reports/cucumber',
                reportPath: './test/reports/cucumberHtml/html'
            }
        }
    ],

// Add it with for example
//cucumberJSON[0].metadata = metadata;

// format : 'rerun:test/reports/@rerun.txt',
// format : 'pretty',
//"json:test/reports/cucumber.json"],
// resultJsonOutputFile: 'report.json',


onPrepare: function () {
browser.ignoreSynchronization = true;
// browser.driver.manage().window().maximize();
let chai = require('chai');
chaiAsPromised = require('chai-as-promised');
expect = chai.expect;
chai.use(require('chai-smoothie'));
chai.use(chaiAsPromised);
}
}
