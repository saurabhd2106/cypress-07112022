export class Homepage {

    //locators

    yourfeedLixtext = "Your Feed"

    yourfeedlinktextIsVisible(){
        cy.contains("a", this.yourfeedLixtext).should("be.visible").and("have.text", "Your Feed")

       
    }

}

export const homepage = new Homepage()