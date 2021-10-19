# UI Automation with Cypress
https://www.cypress.io/

I had been using Selenium for around 7 years, but then I switched to Cypress and use it for some time.
The reason for that is that compared with Selenium the test are much less flaky and faster.

In the past I used Selenium with Cucumber, writing the tests in features and then implementing the code,
so I tried to do the same in cypress using the cucumber preprocessor https://github.com/TheBrainFamily/cypress-cucumber-preprocessor , 
but still not had the time for make it run, so only check the features and the implementation as a prototype, I deleted the preproccesor
related config from the cypress json file.

Just for the demo, I pushed most of the files to the git repo, even if some of them should be added to .gitignore.

## Installation / Running the test
```
npm install cypress --save-dev

npm run cy:open

# Cypress dashboard will be open and you can select the test to run
# For running all test:

npm run cy:run

# For running all test with reports:

npm run cy:all

```

## Mocha Reports
Create json report for each case, merge them into one file and the create an html report file
#https://docs.cypress.io/guides/tooling/reporters#Custom-reporter

Install the following packages:
```
npm install --save-dev cypress-multi-reporters mocha-junit-reporter
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

```
And add the following to the package.json file :
```
"reporter": "mochawesome",
"reporterOptions": {
"reportDir": "cypress/results",
"overwrite": false,
"html": true,
"json": true
}

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cy:open": "./node_modules/.bin/cypress open",
    "cy:run": "./node_modules/.bin/cypress run --spec 'cypress/integration/Tests/*.js'",
    "delete:reports": "rimraf  cypress/results/* || true",
    "report:merge": "mochawesome-merge  cypress/results/*/*.json -o cypress/report/output.json",
    "report:generate": "marge cypress/report/output.json --reportDir ./ --inline",
    "cy:all": "npm run delete:reports && cypress run --spec 'cypress/integration/Tests/*.js' && npm run report:merge && npm run report:generate"
  },
```
