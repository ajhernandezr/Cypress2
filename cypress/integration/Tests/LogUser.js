import {LoginPageEx} from "../PageObject/LoginPage"
import {MainPageTopHeaderEx}from "../PageObject/MainPage"
import data from '../../fixtures/data.json'

const mainPage = new MainPageTopHeaderEx();
const loginPage = new LoginPageEx();


describe("Cypress POM Test Suite", function () {

    beforeEach(() => {
cy.visit("");
    })

     it("Login ", function () {

     mainPage.getToMainPage()
     mainPage.clickLogin()

     loginPage.getLoginPage()
     loginPage.inputCredentials(data.username,data.password)
     loginPage.submit()


     });

});