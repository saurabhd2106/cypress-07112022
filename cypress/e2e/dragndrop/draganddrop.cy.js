/// <reference types="cypress" />


describe("Drag and Drop and IFrame", function(){


    beforeEach(function(){
        cy.visit("https://jqueryui.com/droppable/")
    })

    it("TC #1- Verify Drag and drop and IFrame", function(){


        cy.get(".demo-frame").then(function(frame){

        const frameBody =    frame.contents().find("body");

        cy.wrap(frameBody).find("#draggable").as("draggable")

        cy.wrap(frameBody).find("#droppable").as("droppable")

        })

        cy.get("@draggable").trigger("mousedown", {button: 0})

        cy.get("@droppable").trigger("mousemove").trigger("mouseup", {force: true})

    })


})