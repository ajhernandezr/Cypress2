import 'cypress-audit/commands';


Cypress.Commands.add('clickElement', (elementLocator) => {
    cy.get(elementLocator).scrollIntoView().click(({force: true}))
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
    cy.contains(elementLocator).should('be.visible', {timeout: 7000});
});


Cypress.Commands.add('loginToken', () => {
    cy.request({
        method: 'POST',
        url: ' https://mail.protonmail.com/api/auth/refresh',
        // body: {"ResponseType":"token","GrantType":"refresh_token","RefreshToken":"zurc7gfmow6v2rbkjwo4nudv7cdoltgk","RedirectURI":"https://protonmail.com"}
    })
    // .then((resp) => {
    //     window.localStorage.setItem('jwt', resp.body.user.token)
    // })

})
