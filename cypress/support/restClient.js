export class RestClient {

    sendGetRequest(endpointUrl){
      return  cy.request({
            method: 'GET',
            url: endpointUrl
        })
    }

    sendPostRequest(endpointUrl, requestHeaders, payload){
        return cy.request({
            method: 'POST',
            headers: requestHeaders,
            url: endpointUrl,
            body: payload
        })
    }

    sendPutRequest(endpointUrl, requestHeaders, payload) {

        return cy.request({
            method: 'PUT',
            headers: requestHeaders,
            url: endpointUrl,
            body: payload
        })

    }

    sendDeleteRequest(endpointUrl){
        return  cy.request({
              method: 'DELETE',
              url: endpointUrl
          })
      }
}

export const restClient = new RestClient();