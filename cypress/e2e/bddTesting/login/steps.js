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

When ('Saurabh uses the credentials as', async function(datatable) {

    let data = datatable.raw();

    let useremail = data[0][0];

    let userpassword = data[1][0];

    loginPage.loginToApplication(useremail, userpassword)


})


When ('Saurabh uses the credentials as map', async function(datatable) {


    let useremail;

    let userpassword;

    datatable.transpose().hashes().map(function(value) {
        useremail = value.useremail;
        userpassword = value.userpassword;
    })

    loginPage.loginToApplication(useremail, userpassword)


})

When ('Saurabh uses the credentials as vertical map', async function(datatable) {


    let useremail;

    let userpassword;

    datatable.hashes().map(function(value) {
        useremail = value.useremail;
        userpassword = value.userpassword;
    })

    loginPage.loginToApplication(useremail, userpassword)


})


Then('Saurabh gets access to the application', async function () {

 //  await commonDriver.closeBrowser();
    
});