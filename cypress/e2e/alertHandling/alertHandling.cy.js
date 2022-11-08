/// <reference types="cypress" />


describe("Alert Handling", function(){

    it("Alert Handling", function(){
        cy.visit("https://test.qatechhub.com/alert-handling/")

        cy.get("#NormalAlert").click()

        cy.on("window:alert", function (message){

            expect(message).to.be.equal("Hello! I am an alert box!")

        })

    })

    it("Alert Handling on confirm", function(){
        cy.visit("https://test.qatechhub.com/alert-handling/")

        cy.get("#CustomAlert").click()

        cy.on("window:confirm", function (message){

            expect(message).to.be.equal("Press a button!")

            return false

        })

    })

})