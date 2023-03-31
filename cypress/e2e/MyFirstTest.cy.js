describe('My first Test Suite',()=>{

    it('test1',()=>{
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.title().should('eq', 'OrangeHRM')
    })

    it('test2',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.contains('Admin').click()

         })

})
