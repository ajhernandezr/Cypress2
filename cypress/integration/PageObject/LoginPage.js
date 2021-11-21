const commands = require('../../support/commands')

class LoginPage {

    getLoginPage() {
        cy.location('pathname', {timeout: 6500}).should('include', 'login');
    }

    inputCredentials(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)

    }

    submit() {
        cy.get('#loginButton').click()
    }
}
export const LoginPageEx = LoginPage;
