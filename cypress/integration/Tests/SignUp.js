const commands = require('../../support/commands')

describe('Sign Up Free account', () => {
    before(function () {
        // "this" points at the test context object
        cy.fixture('login').then((data) => {
        this.data = data;
        cy.visit('');
        })
    })

    it('Open the Sign Up form', function() {
        cy.clickElementContains('SIGN UP')
        cy.clickElement('FreePlan')
        cy.clickElement('FreePlanButton')

        // fill sign up form
        cy.typeText('Email', this.data.newUsername);
        cy.typeText('Password', this.data.password);
        cy.typeText('RepeatPassword', this.data.password);
        cy.clickElement('SignInButton');
    })
})