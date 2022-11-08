import { restClient } from "../support/restClient";

export class LoginAPI {

    loginApiEndpointUrl = "/api/users/login"

    loginToApplication(useremail, userpassword) {

        let body = {
            "user": {
                "email": useremail,
                "password": userpassword
            }
        }

        let requestHeaader = {
            "Accept" : "application/json"
        }

       return restClient.sendPostRequest(this.loginApiEndpointUrl, requestHeaader, body)


    }

}

export const loginApi = new LoginAPI();