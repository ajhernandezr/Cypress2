const commands = require('../../support/commands')


class MainPageTopHeader {

    getToMainPage(){
    cy.location('origin', {timeout: 6500}).should('include', 'cryptofinance.ch');

    }

    clickLogin() {
    cy.get('.header1NonScrolled > .container > .row > .col-lg-2 > .btn').invoke('removeAttr', 'target').click()
    }

}

export const MainPageTopHeaderEx = MainPageTopHeader;
