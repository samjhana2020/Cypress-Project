
require('cypress-xpath')
describe('Assertion',()=>{

    /*

    Assertion :
    Implicit Assertion
    Explicit Assertion
   1> BDD Type : should , equal, not equal , contains
   2> TDD Type : Expect/Assert



     */

    it('Assertion example 1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain', 'web/index.php/auth/login').should('include', 'web/index.php/auth/login')
            .should('not.contain', '/test')

        cy.url().should('include', 'web/index.php/auth/login')
        cy.url().should('not.contain', '/test')
        cy.get('.oxd-input.oxd-input--active').should('be.visible').
            should('have.length',2)
        cy.xpath('//*[text()="Forgot your password? "]')
            .should('be.visible')
            .should('contain.text',"Forgot your password?")
            .should('have.text',"Forgot your password? ")

    })

    it.only(' Assertion example 2 ',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('[type="checkbox"][class="form-check-input"]').first().check()
            .should('be.checked')
        cy.get('[type="checkbox"][class="form-check-input"]').last()
            .should('not.be.checked')
    })



})
