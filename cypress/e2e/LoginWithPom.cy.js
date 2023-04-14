//  const Login= require("../POM/LoginPage");
import  Login  from "../POM/LoginPage";
describe('Login with POM',()=>{

    it('Success Login',()=>{
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   let login = new Login();
   login.setUserName("Admin");
   login.setPassword("admin123");
   login.clickLoginButton();
   login.verifySuccessfulLogin("valid");
    })

    it('Invalid Credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        let login = new Login();
        login.setUserName("Admin5621");
        login.setPassword("admin12378");
        login.clickLoginButton();
        login.verifySuccessfulLogin("InvalidCredentials");
    })

    it('Blank password',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        let login = new Login();
        login.setUserName("Admin");
        login.clickLoginButton();
        login.verifySuccessfulLogin("BlankPassword");
    })

    it('Blank Username',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        let login = new Login();
        login.setPassword("admin123");
        login.clickLoginButton();
        login.verifySuccessfulLogin("BlankUserName");
    })


})
