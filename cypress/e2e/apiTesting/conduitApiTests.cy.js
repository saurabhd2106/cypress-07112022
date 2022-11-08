/// <reference types='cypress' />

import {stringify} from "querystring"

describe("API Testing", function(){


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
})