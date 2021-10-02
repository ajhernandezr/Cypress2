const locators = require('./DemoLocators')

Cypress.Commands.add('clickElement', (elementLocator) => {
    cy.get(locators[elementLocator]).scrollIntoView().click(({force: true}))
});

Cypress.Commands.add('clickFirstElement', (elementLocator) => {
    cy.get(locators[elementLocator]).eq(0).click()
});

Cypress.Commands.add('focusFirstElement', (elementLocator) => {
    cy.get(locators[elementLocator]).eq(0).focus()
});

Cypress.Commands.add('mouseOverElement', (elementLocator) => {
    cy.get(locators[elementLocator]).eq(0).trigger('mouseover')
});

Cypress.Commands.add('clickElementContains', (elementLocator) => {
    cy.contains(elementLocator).scrollIntoView().click(({force: true}))
});
Cypress.Commands.add('typeText', (elementLocator, text) => {
    cy.get(locators[elementLocator]).eq(0).scrollIntoView().type(text, {force: true});
});
Cypress.Commands.add('assertElement', (elementLocator, text) => {
    cy.get(locators[elementLocator]).should('be.visible');
});
Cypress.Commands.add('assertElementNotVisible', (elementLocator, text) => {
    cy.get(locators[elementLocator]).should('not.be.visible');
});
Cypress.Commands.add('assertElementContains', (elementLocator) => {
    cy.contains(elementLocator).should('be.visible');
});

    Cypress.Commands.add('login', (username, password) => {
        // cy.clickElement('Hamburgermenu');
        cy.clickElementContains('Log in')
// // Fill the Login form with Credentials
        cy.typeText('Email', username);
        cy.typeText('Password', password);
        cy.clickElement('SignInButton');
        cy.wait(500)
    });