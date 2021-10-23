const commands = require('../../support/commands')

class LoginPage {
    navigate() {
        cy.visit('https://beta.protonmail.com/settings/label')
        cy.location('pathname', {timeout: 6500}).should('include', 'login');
        cy.get('div[class="sign-layout-main-content"]').should('be.visible', { timeout: 6000 });
    }

    inputCredentials(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)

    }

    submit() {
        cy.get('button[type = "submit"]').click()
    }
}

export default LoginPage
