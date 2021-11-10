import LoginPage from "../PageObject/LoginPage"
import {FoldersLabelsPageEx, FoldersPageEx, LabelPageEx} from "../PageObject/FoldersLabelsPage"
import data from '../../fixtures/data.json'


describe("Cypress POM Test Suite", function () {

    beforeEach(() => {
//        const login = new LoginPage();
//        login.navigate();
//        login.inputCredentials(data.username, data.password)
//        login.submit()
cy.visit("");
    })


     it("Contact with us ", function () {
         const foldersLabel = new FoldersLabelsPageEx();
         const folders = new FoldersPageEx();
         foldersLabel.navigate();

     });


});