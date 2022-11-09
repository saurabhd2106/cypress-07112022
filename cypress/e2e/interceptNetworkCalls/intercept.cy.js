/// <reference types='cypress' />

describe("Intercept Network calls ", function () {


    it("Intercept calls", function () {

        // Starting an intercept listner
        cy.intercept({

            method: "GET",
            url: "**/api/tags"

        },
            {
                statusCode: 201,
                body: {
                    tags: ["Cypress", "BDD", "API Automation"]
                }
            }

        ).as("tagsApi")

        //Perform action
        cy.visit("/")

        cy.wait("@tagsApi")

        cy.get("@tagsApi").then(function (xhr) {
            console.log(xhr)

            expect(xhr.response.body.tags).to.contain("Cypress")
            expect(xhr.response.body.tags).to.contain("BDD")
            expect(xhr.response.body.tags).to.contain("API Automation")
        })



    })
})