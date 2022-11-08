/// <reference types='cypress' />

import {stringify} from "querystring"
import { loginApi } from "../../conduitApis/loginAPI"

describe("API Testing", function(){

    beforeEach(function(){

        cy.fixture("users").then(function(users) {
            this.users = users
        })


    })


    it("Get Tags API", function(){


        cy.request({
            method: 'GET',
            url: '/api/tags'
        }).then(function(response) {

            expect(response.status).to.equal(200)

            expect(response.body.tags).to.contains("Cypress")

            cy.log(stringify(response))

        })
    })

    it("Login to Application", function(){

        let access_token;

        let payload = {
            "user": {
                "email": "saurabh@fake.com",
                "password": "fake"
            }
        }

        let headers = {
            "Content-Type": "application/json"
        }

        cy.request({
            method: 'POST',
            url: '/api/users/login',
            body: payload,
            headers: headers
        }).then(function(response){
            expect(response.status).to.equal(200)

            access_token = response.status.user.token
            
            cy.log(access_token)
        })
    })

    it("Login via api", function(){

        let access_token;

        loginApi.loginToApplication(this.users.username, this.users.userPassword).then(function(response){

            expect(response.status).to.be.equal(200)

            access_token = response.body.user.token;
        })
    })
})