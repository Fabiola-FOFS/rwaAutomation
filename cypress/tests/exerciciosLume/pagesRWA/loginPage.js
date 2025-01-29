class loginPage {

  selectorsList() {
    const selectors = {
      usernameField: "#username", //usuario
      passwordField: "#password", // senha
      rememberMeButton: ".MuiFormControlLabel-root", //lembrar conta
      signInButton: '[data-test="signin-submit"]', //botão de entrar
      loginFailAllert: ".MuiAlert-message", //alerta de credenciais invalidas para login fail
    } 

    return selectors;
  }

  accessloginPage() {
    cy.visit("/localhost:3000/");
  }
  
  loginWhithUser(username, password) {
    cy.get(this.selectorsList().usernameField).click().type(username);
    cy.get(this.selectorsList().passwordField).click().type(password);
    cy.get(this.selectorsList().rememberMeButton).click();
    cy.get(this.selectorsList().signInButton).click();
  }
  loginFail(username, password) {
    cy.get(this.selectorsList().usernameField).click().type(username);
    cy.get(this.selectorsList().passwordField).click().type(password);
    cy.get(this.selectorsList().rememberMeButton).click();
    cy.get(this.selectorsList().signInButton).click();
    cy.get(this.selectorsList().loginFailAllert);
  }
}

export default loginPage;
