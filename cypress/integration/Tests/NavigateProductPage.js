const commands = require('../../support/commands')

describe('Navigate to product page', () => {
    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })
    before(function () {

        // "this" points at the test context object
        cy.fixture('login').then((data) => {
            // "this" is still the test context object
            this.data = data;
            cy.visit('');
        })
    })

    it('Navigate product page not logged', function() {
        cy.assertElement('Articles')
        cy.assertElementContains('Log in')
        cy.assertElementContains('Sign up')
        cy.assertElementNotVisible('ArticlePrices')
    })
})