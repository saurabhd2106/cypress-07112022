/// <reference types='cypress' />

import { loginApi } from "../conduitApis/loginAPI"
import { articlePage } from "../pages/articlesPage";

describe("Add Article", function () {

    let response;

    this.beforeEach(function () {

        loginApi.loginToApplication("saurabh@fake.com", "fake").then(function (response) {

            this.response = response;

        })



        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.setItem("user", JSON.stringify(this.response.body.user))
            }
        })

    })

    it("Add article", function () {

        articlePage.navigateToArticlePage()

        articlePage.addArticle("Cypress", "Cypress Article", "Test Article", "Cypress")

    })
})

