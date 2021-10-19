const commands = require('../../support/commands')

describe('Scroll', () => {
    before(function () {
            cy.visit('');
        })

    it('Perform scroll and load more Products', function() {
        cy.scrollTo('bottom')

        cy.assertElementContains('ProtonMail')
        cy.assertElementContains('Features')
        cy.assertElementContains('Features')
        cy.assertElementContains('Company')
        cy.assertElementContains('Social')

    })
})