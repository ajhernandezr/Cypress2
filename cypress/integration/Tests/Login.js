const commands = require('../../support/commands')

describe('Login', () => {
    before(function () {
        // "this" points at the test context object
        cy.fixture('login').then((data) => {
            // "this" is still the test context object
            this.data = data;
            cy.viewport(1280, 720)
            cy.visit('');
        })
    })

    it('Login the user', function() {
        cy.login(this.data.username, this.data.password)
        cy.visit("https://www.tundra.com/search?q=*&c=USA")
    })

})