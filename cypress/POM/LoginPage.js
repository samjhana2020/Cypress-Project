class Login {
//Define Page Element

    textUserName = '[name="username"]'
    textPassword = '[name="password"]'
    btnLogin = '[type="submit"]'

//Define methods

    setUserName(username) {
        cy.get(this.textUserName).type(username);
    }

    setPassword(password) {
        cy.get(this.textPassword).type(password);
    }

    clickLoginButton() {
        cy.get(this.btnLogin).click();

    }

    verifySuccessfulLogin(credentialStatus) {

        if( credentialStatus=="valid")
        {

            cy.get('.oxd-topbar-header-breadcrumb-module').then(($el) => {
                let dashboardText = $el.text();

                if (dashboardText = "Dashboard") {
                    cy.log("Successful Login")
                }
            })
        }

        if( credentialStatus=="InvalidCredentials")
        {
            cy.contains("Invalid credentials").should('have.css','color').and('equal',"rgb(44,44,44)")

        }

        if( credentialStatus=="BlankUserName" || credentialStatus=="BlankPassword")
        {
            cy.contains("Required")
        }



    }


}
 export default Login;
