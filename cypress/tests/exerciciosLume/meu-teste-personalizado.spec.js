import userData from './fixtures/users/userData.json';

describe('exercicio 1 RWA', () => {
  const selectorsList = {
    usernameField: "#username",
    passwordField: "#password",
    rememberMeButton: ".MuiFormControlLabel-root",
    signInButton: '[data-test="signin-submit"]',
    loginFailAllert: ".MuiAlert-message",
  };

  it("Deve fazer login com usuário valido", () => {
    cy.visit("/localhost:3000/");
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.rememberMeButton).click();
    cy.get(selectorsList.signInButton).click();
    // verificar se estou na pagina correta cy.get('button').contains('EVERYONE').should('be.visible')//
    //cy.get('[data-test="nav-public-tab"]').contains('EVERYONE')
  });
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
    cy.visit("/localhost:3000/");
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.rememberMeButton).click();
    cy.get(selectorsList.signInButton).click();
    cy.get(selectorsList.loginFailAllert);
  });
});
