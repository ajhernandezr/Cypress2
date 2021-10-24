const commands = require('../../support/commands')

cy.checkIfEleExists = function (selectAriaLabelRowsPerPage) {

}

class FoldersLabelsPage {

    navigate() {
        cy.get('a[title="Manage your folders"]').click()
        cy.location('pathname', {timeout: 6500}).should('include', '/mail/folders-labels');
        cy.assertElementContains('Folders & labels')
    }

    checkPreviousElements(elementName) {
        if (Cypress.$('ul[role="tree"]').length > 0) {
            cy.get('button[data-test-id="dropdown:open"]').click()
            cy.get('button[data-test-id="folders/labels:item-delete"]').click()
            cy.get('button[class="button button-solid-danger"]').click()
        }
    }

    addFolder() {
        cy.clickElementContains('Add folder')
        cy.assertElementContains('Create folder')
    }

    addLabel() {
        cy.clickElementContains('Add label')
        cy.assertElementContains('Create label')
    }

    changeFolderColors() {
        if (Cypress.$('label[class="toggle-label toggle-label--checked"]').length > 0) {
            cy.get('#folder-colors').click()
        }
    }

    deleteElement() {
        cy.get('button[data-test-id="dropdown:open"]').click({ multiple: true })
        cy.get('button[data-test-id="folders/labels:item-delete"]').click()
        cy.get('button[class="button button-solid-danger"]').click()
    }
}


class FoldersPage {

    createFolder(folderName) {
        cy.get('#accountName').type(folderName)
    }

    folderLocation() {
        cy.clickElement('#parentID')
    }

    folderNotification() {
        cy.clickElement('#notification')
    }

    chooseColor(color) {
        cy.get('button[class="flex flex-align-items-center field select"]').click()
        cy.get('input[value="' + color + '"]').click()
    }

    save(folderName) {
        cy.clickElementContains('Save')
        // cy.get('button[type = "submit"]').click()
        cy.assertElementContains(folderName)
    }

    cancel() {
        cy.get('button[type = "reset"]').click()
    }

}

class LabelPage {

    createLabel(labelName) {
        cy.get('#accountName').type(labelName)
    }

    chooseColor(color) {
        cy.get('button[class="flex flex-align-items-center field select"]').click()
        cy.get('input[value="' + color + '"]').click()
    }

    save(labelName) {
        cy.get('button[type = "submit"]').click()
        cy.clickElementContains('Save')
        cy.assertElementContains(labelName)
    }
}

export const FoldersLabelsPageEx = FoldersLabelsPage;
export const FoldersPageEx = FoldersPage;
export const LabelPageEx = LabelPage;
