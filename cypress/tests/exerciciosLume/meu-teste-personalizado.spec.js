import userData from "./fixtures/users/userData.json";

describe("exercicio 1 RWA", () => {
  const selectorsList = {
    usernameField: "#username", //usuario
    passwordField: "#password", // senha
    rememberMeButton: ".MuiFormControlLabel-root", //lembrar conta
    signInButton: '[data-test="signin-submit"]', //botão de entrar
    loginFailAllert: ".MuiAlert-message", //alerta de credenciais invalidas para login fail
    newAccountButton: '[data-test="signup"]', //botão para criar nova conta
    newUserFirstName: "#firstName", // campo para colocar primeiro nome para a nova conta
    newUserLastName: "#lastName", // campo para o sobrenome para a nova conta
    //newuserName: "#username",
    //newUserPassword: "#password",
    confirmNewPassword: "#confirmPassword", //campo para confirmar senha para a nova conta
    newUserSingUpButton: '[data-test="signup-submit"', //botão para criar a nova conta
    rememberMeButtonNew: ".PrivateSwitchBase-input", //botão de lembrar dados da nova conta
    signInWNewACard: ".SignInForm-paper", // pagina para fazer login com a nova conta

    newUserInvalidcredAllert: '#password-helper-text', //somente dá erro se a senha não tiver 9 caracteres

    /*bloco da lista que pertence a verificação que só aparece na 1 vez que cria um novo usuário */
    startAccountNewUserCard: '[data-test="user-onboarding-dialog-title"]', // card deve aparecer na 1 vez que cria uma nova conta pedindo para criar uma conta bancária
    startNextButton: '[data-test="user-onboarding-next"]', // botão do card para criar a conta bancária
    newBankAccountCard: '[data-test="user-onboarding-dialog-title"]', //card com o formulario para criar uma nova conta bancária
    bankNameinput: "#bankaccount-bankName-input", // campo para colocar o nome do banco
    RoutingNameinput: "#bankaccount-routingNumber-input", //campo para colocar o numero ROUTING do banco
    bankAccountNumberinput: "#bankaccount-accountNumber-input", //campo para colocar o numero da conta bancaria
    saveNewBankAccountButton: '[data-test="bankaccount-submit"]', // botão para salvar a nova conta bancária
    finishedcard: '[data-test="user-onboarding-dialog-title"]', //card que aparece quando finaliza o cadástro de uma conta bancária nova
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

  it("Deve registrar um novo usuário com informações válidas", () => {
    cy.visit("http://localhost:3000/signin"); //visita o app RWA
    cy.get(selectorsList.newAccountButton).click({ force: true }); //clica em criar nova conta
    cy.get(selectorsList.newUserFirstName).type(userData.newUser.newUserFisrtName); //coloca o nome de usuário para a nova conta
    cy.get(selectorsList.newUserLastName).type(userData.newUser.newUserLastName); // coloca o sobrenome de usuário para a nova conta
    cy.get(selectorsList.usernameField).type(userData.newUser.newUserName); // cria um user para a nova conta (campo)
    cy.get(selectorsList.passwordField).type(userData.newUser.newUserPassword); //cria uma nova senha
    cy.get(selectorsList.confirmNewPassword).type(userData.newUser.newUserPassword); // recola a nova senha no campo confirmar
    cy.get(selectorsList.newUserSingUpButton).click({ force: true }); // clica no botão de criar nova conta
    cy.get(selectorsList.signInWNewACard).should("exist"); //verifica se aparece o card para fazer login com a nova conta
    cy.get(selectorsList.usernameField).type(userData.newUser.newUserName); //coloca o username do novo usuário da nova conta
    cy.get(selectorsList.passwordField).type(userData.newUser.newUserPassword); // coloca a senha da nova conta
    cy.get(selectorsList.rememberMeButtonNew).click(); //clica no botão para lembrar dados da nova conta
    cy.get(selectorsList.signInButton).click(); //clica em no botão para entrar com a nova conta

    /* codigo referente  a criar uma nova conta bancária, só da certo na primeira vez que cria a conta */
    //cy.get(selectorsList.startAccountNewUserCard).should("exist"); // na primeira vez que cria a nova conta aparece um card pedindo para criar uma conta bancária
    //cy.get(selectorsList.startNextButton).click(); // botão do card para criar a conta
    //cy.get(selectorsList.newBankAccountCard).should("exist"); //verifica se estou no card de criar uma nova conta bancária
    //cy.get(selectorsList.bankNameinput).type(userData.bankData.bankname);
    //cy.get(selectorsList.RoutingNameinput).type(userD      //cy.get(selectorsList.newUserSingUpButton).click({ force: true }); // clica no botão de criar nova conta
      //cyata.bankData.RoutingNumber);
    //cy.get(selectorsList.bankAccountNumberinput).type(userData.bankData.BankAccount);
    //cy.get(selectorsList.saveNewBankAccountButton).click();
    //cy.get(selectorsList.finishedcard).should("exist");
  });
  describe("Tentar registrar um novo usuário com informações incompletas", () => {
    it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
      cy.visit("http://localhost:3000/signin"); //visita o app RWA
      cy.get(selectorsList.newAccountButton).click({ force: true }); //clica em criar nova conta
      cy.get(selectorsList.newUserFirstName).type(userData.newUserInvalid.newUserFisrtNameinv); //coloca o nome de usuário com numeros ao invés de letras
      cy.get(selectorsList.newUserLastName).type(userData.newUserInvalid.newUserLastNameInv); // coloca o sobrenome de usuário para a nova conta
      cy.get(selectorsList.usernameField).type(userData.newUserInvalid.newUserInv); // cria um user para a nova conta (campo)
      cy.get(selectorsList.passwordField).type(userData.newUserInvalid.newUserPasswordInv); //cria uma nova senha
      cy.get(selectorsList.confirmNewPassword).type(userData.newUserInvalid.newUserPasswordInv); // recola a nova senha no campo confirmar
      cy.get(selectorsList.newUserInvalidcredAllert).should("exist"); //avisa que não é possivel criar conta com senha de menos de 4 caracteres
    });
  });
});
