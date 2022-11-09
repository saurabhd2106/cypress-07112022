/// <reference types='cypress' />

import { articlePage } from "../../pages/articlesPage"
import {loginApi} from "../../conduitApis/loginAPI"

describe("Intercept Network calls ", function () {


    it("Intercept calls", function () {

        // Starting an intercept listner
        cy.intercept({

            method: "GET",
            url: "**/api/tags"

        },
            {
               fixture: "tags_response.json"
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

    it("Add Article", function () {

        let res

        cy.intercept({
            method: "POST",
            url: "**/api/articles"
        }, function (req) {
            req.body.article.title = "Article title updated via API"
        }).as("productApi")

        loginApi.loginToApplication("saurabh@fake.com", "fake").then(function (response) {

            res = response;

        })


        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.setItem("user", JSON.stringify(res.body.user))
            }
        })

        articlePage.navigateToArticlePage()

        articlePage.addArticle("Cypress Test Automation", "Cypress", "Test Automation va cypress", "Cypress")

        cy.wait("@productApi").then(function(xhr){
            expect(xhr.response.body.article.title).to.contain("Article title updated via API")
        })


    })
})