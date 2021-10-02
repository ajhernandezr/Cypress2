const commands = require('../../support/commands')

describe('Scroll', () => {
    before(function () {
            cy.visit('');
        })

    it('Perform scroll and load more Products', function() {
        cy.scrollTo('bottom')
        cy.clickElementContains('Load more products')
    })
})