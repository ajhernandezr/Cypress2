import LoginPage from "../PageObject/LoginPage"
import {FoldersLabelsPageEx, FoldersPageEx, LabelPageEx} from "../PageObject/FoldersLabelsPage"
import data from '../../fixtures/data.json'


describe("Cypress POM Test Suite", function () {

    beforeEach(() => {
        const login = new LoginPage();
        login.navigate();
        login.inputCredentials(data.username, data.password)
        login.submit()
        cy.location('pathname', {timeout: 25000}).should('include', '/inbox');
    })

    //
    // it("Create and delete a folder", function () {
    //     const foldersLabel = new FoldersLabelsPageEx();
    //     const folders = new FoldersPageEx();
    //     foldersLabel.navigate();
    //     foldersLabel.checkPreviousElements(data.foldername)
    //     foldersLabel.addFolder();
    //     folders.createFolder(data.foldername);
    //     folders.save(data.foldername);
    //     foldersLabel.deleteElement()
    // });

    // it("Create and delete a folder with color", function () {
    //     const foldersLabel = new FoldersLabelsPageEx();
    //     const folders = new FoldersPageEx();
    //     foldersLabel.navigate();
    //     foldersLabel.checkPreviousElements(data.foldername)
    //     foldersLabel.addFolder();
    //     folders.createFolder(data.foldername);
    //     folders.chooseColor(data.bluecolor)
    //     folders.save(data.foldername);
    //     foldersLabel.deleteElement()
    // });

    //
    it("Create and delete a Label", function () {
        const foldersLabel = new FoldersLabelsPageEx();
        const labels = new LabelPageEx();
        foldersLabel.navigate();
        foldersLabel.checkPreviousElements(data.labelname)
        foldersLabel.addLabel();
        labels.createLabel(data.labelname)
        labels.chooseColor(data.bluecolor)
        labels.save(data.labelname)
        foldersLabel.deleteElement()
    });

});