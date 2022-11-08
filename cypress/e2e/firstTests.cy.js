/// <reference types='cypress'/>

import { homepage } from "../pages/homepage"
import { loginPage } from "../pages/loginpage"

// Testsuite 
describe("Login Test on Conduit App", function(){
    

    before(function(){

        cy.log("This is the first method to execute")

    
    })


    after(function(){

        cy.log("This is the last method to execute")

    })

    beforeEach(function(){

        cy.log("This is a method that executes before every test case")

        cy.fixture("users").then(function(users) {
            this.users = users
        })

        cy.visit('/user/login')

    })

    afterEach(function(){
        cy.log("This method executes after every test case")
    })

    

    //TestCase
    it('login to application with correct credentials', function(){

       loginPage.loginToApplication(this.users.username, this.users.userPassword)

       homepage.yourfeedlinktextIsVisible()

       cy.screenshot()


    })

     //TestCase
     it('login to application with incorrect credentials', function(){

        loginPage.loginToApplication(this.users.invalidUser, this.users.invalidPassword)
 
 
     })

      //TestCase
    it('login to application with empty credentials', function(){

        loginPage.loginToApplication(' ', ' ')
 
 
     })

})