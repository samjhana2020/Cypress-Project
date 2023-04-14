class LoginPage{

    //Define Page Element 

textUserName='[name="username"]'
textPassword='[name="password"]'
btnLogin= '[type="submit"]'

elements={
userName : () => cy.get(this.textUserName),
password : () => cy.get(this.textPassword),
loginButton : () => cy.get(this.btnLogin)
}

typeUserName(username)
{
    this.elements.userName().type(username)
}

typePassword(password)
{
    this.elements.password().type(password)
}

clickLogin()
{
    this.elements.loginButton.click()
}

}