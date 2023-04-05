require('cypress-xpath')
describe('Radio button and checkbox',()=> {

    it('radio button', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('#female').should('not.be.checked')
            .check()
            .should('be.checked')

        cy.get('#other').should('be.disabled')
    });

    /*
    Assignment : check for male radio button and verify the radio button is enabled and checked

     */

    it.only('checkbox', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.form-check-input[type="checkbox"]').should('have.length', 7)
        cy.get('.form-check-label').each(($el, index, $list)=>{
            let weekDays = $el.text().trim()
            cy.log("weekDays==>"+weekDays)

            if(weekDays=='Sunday')
            {
                cy.log("checked weekday==>"+weekDays)
                $el.click()
                 cy.wrap($el).click()

            }

        })
        /**
         * check for thrusday week and verify it is checked
         */


    });

})
