export class LoginPage {

    emailField = 'input[placeholder="Email"]'

    passwordField = 'input[placeholder="Password"]'

    signInButtonText = 'Sign in'

    loginToApplication(useremail, userpassword) {

        cy.get(this.emailField).type(useremail)

        cy.get(this.passwordField).type(userpassword)

        cy.contains('button', this.signInButtonText).click()
    }


}

export const loginPage = new LoginPage()