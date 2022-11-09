import { Given, When, Then } from "@cucumber/cucumber";

import {loginPage} from "../../../pages/loginpage"
import {homepage} from "../../../pages/homepage"

Given("Saurabh is a writer and has access to the conduit application", function(){


    cy.visit("/")

})

When("Saurabh uses the credentials as {string} and {string}", function(useremail, userpassword){

    loginPage.loginToApplication(useremail, userpassword)

})

Then("Saurabh gets access to the application", function(){

    homepage.yourfeedlinktextIsVisible()
})