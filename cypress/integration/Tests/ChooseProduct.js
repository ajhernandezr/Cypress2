const commands = require('../../support/commands')

describe('Choose a product', () => {
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

    it('Login the user', function() {
        cy.login(this.data.username, this.data.password)
    })
    it('Select a Product', function() {
        cy.clickFirstElement('Articles')
    })
})