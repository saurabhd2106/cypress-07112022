/// <reference types='cypress' />

describe("Multiple Tab support", function(){

    beforeEach(function(){

        cy.visit("https://test.qatechhub.com/window-handling/")

    })

    it("Verify multiple tab support", function(){

        cy.contains("a", "Click Here").should("have.attr", "target").and("equal", "_blank")

        cy.contains("a", "Click Here").should("have.attr", "href").and("equal", "https://qatechhub.com")

        cy.contains("a", "Click Here").invoke("removeAttr", "target").click()



    })
})