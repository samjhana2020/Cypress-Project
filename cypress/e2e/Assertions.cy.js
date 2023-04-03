
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

    it(' Assertion example 2 ',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('[type="checkbox"][class="form-check-input"]').first().check()
            .should('be.checked')
        cy.get('[type="checkbox"][class="form-check-input"]').last()
            .should('not.be.checked')
    })

    it(' Explict Assertion - example 3 ',()=>{
        cy.fixture('example').then((obj)=>{
            expect(obj).to.deep.equal({
                    "name": "Using fixtures to represent data",
                    "email": "hello@cypress.io",
                    "body": "Fixtures are a great way to mock data for responses to routes"
                })

            expect({
                "name": "Using fixtures to represent dat",
                "email": "hello@cypress.io",
                "body": "Fixtures are a great way to mock data for responses to routes"
            }).to.deep.equal({
                    "name": "Using fixtures to represent data",
                    "email": "hello@cypress.io",
                    "body": "Fixtures are a great way to mock data for responses to routes"
                }
            )

       })
    })

    it.only(' Explict Assertion - example 4 ',()=>{

        let obj = {
            name : "Sami",
            id :123
        }
        expect(obj).to.contain({name:'Sami'})

//let, const, var
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').then(($var)=>{
            let actName=$var.text()
            const expName="Login"
            let classAttributeValue = $var.attr("class");
            $var.removeAttr("class")
            cy.log("classAttributeValue-->"+classAttributeValue)
            //BDD Style - explicit assertion
            expect(actName).to.eq(expName)
            expect(actName).to.not.eq("Logins")

            //TDD Style - explicit assertion

            assert.equal(actName,expName)
            assert.notEqual(actName,"Logins")

        })


    })



})
