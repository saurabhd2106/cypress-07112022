/// <reference types='cypress' />

import { loginApi } from "../conduitApis/loginAPI"
import { articlePage } from "../pages/articlesPage";

describe("Add Article", function () {

    let res;

    beforeEach(function () {

        loginApi.loginToApplication("saurabh@fake.com", "fake").then(function (response) {

            res = response;

        })



        cy.visit("/", {
            onBeforeLoad(win) {
                win.localStorage.setItem("user", JSON.stringify(res.body.user))
            }
        })

    })

    it("Add article", function () {

        articlePage.navigateToArticlePage()

        articlePage.addArticle("Cypress", "Cypress Article", "Test Article", "Cypress")

    })
})

