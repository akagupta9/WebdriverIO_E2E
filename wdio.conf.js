
reportDirectory = "./testResults/"+new Date();
exports.config = {
    runner: 'local',

    suites: {
        signUp: [
            './dist/test/specs/signup.js'
        ]
    },
    specs: [
        './dist/test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
   maxInstances: 10,
    capabilities: [{
      maxInstances: 5,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
        }],
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'https://www.heroku.com',
    
    waitforTimeout: 10000,
   
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['chromedriver'],

    // services: [
    //     ['selenium-standalone', { drivers: { chrome: true, safari: 'latest'} }]
    // ],
   
    framework: 'mocha',
   
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    

    afterTest: async(test, context, { error, result, duration, passed, retries }) =>{
        TODO
        // await browser.takeScreenshot();
       
    },
   
}
