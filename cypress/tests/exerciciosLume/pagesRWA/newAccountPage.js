class newAccountPage {
  selectorsListNA() {
    const selectors = {
      newAccountButton: '[data-test="signup"]', //botão para criar nova conta
      newUserFirstName: "#firstName", // campo para colocar primeiro nome para a nova conta
      newUserLastName: "#lastName", // campo para o sobrenome para a nova conta
      userNameField: "#username",
      newUserPasswordfield: "#password",
      confirmNewPassword: "#confirmPassword", //campo para confirmar senha para a nova conta
      newUserSingUpButton: '[data-test="signup-submit"]', //botão para criar a nova conta
      loginNewAcButton: '[data-test="signin-submit"]', // botão para logar com a nova conta
      rememberMeButtonNew: ".PrivateSwitchBase-input", //botão de lembrar dados da nova conta
      signInWNewACard: ".SignInForm-paper", // pagina para fazer login com a nova conta
      newUserInvalidcredAllert: "#password-helper-text", //somente dá erro se a senha não tiver 9 caracteres /*bloco da lista que pertence a verificação que só aparece na 1 vez que cria um novo usuário */
      startAccountNewUserCard: '[data-test="user-onboarding-dialog-title"]', // card deve aparecer na 1 vez que cria uma nova conta pedindo para criar uma conta bancária
      startNextButton: '.MuiButton-colorPrimary', // botão do card para criar a conta bancária
      newBankAccountCard: '.MuiDialog-container', //card com o formulario para criar uma nova conta bancária
      bankNameinput: "#bankaccount-bankName-input", // campo para colocar o nome do banco
      RoutingNameinput: "#bankaccount-routingNumber-input", //campo para colocar o numero ROUTING do banco
      bankAccountNumberinput: "#bankaccount-accountNumber-input", //campo para colocar o numero da conta bancaria
      saveNewBankAccountButton: '[data-test="bankaccount-submit"]', // botão para salvar a nova conta bancária
      finishedcard: '[data-test="user-onboarding-dialog-title"]', //card que aparece quando finaliza o cadástro de uma conta bancária nova
    };
    return selectors;
  }

  accesscreateNA() {
    cy.visit("/localhost:3000/"); //visita pagina de login do app RWA
    cy.get(this.selectorsListNA().newAccountButton).click({ force: true }); //clica em criar nova conta
  }

  createnewAccountWhith(FisrtName, LastName, newUserName, newUserPassword) {
    cy.get(this.selectorsListNA().newUserFirstName).click().type(FisrtName); //coloca o nome de usuário para a nova conta
    cy.get(this.selectorsListNA().newUserLastName).click().type(LastName); // coloca o sobrenome de usuário para a nova conta
    cy.get(this.selectorsListNA().userNameField).click().type(newUserName); // cria um user para a nova conta (campo)
    cy.get(this.selectorsListNA().newUserPasswordfield).click().type(newUserPassword); //cria uma nova senha
    cy.get(this.selectorsListNA().confirmNewPassword).click().type(newUserPassword); // recola a nova senha no campo confirmar
    cy.get(this.selectorsListNA().newUserSingUpButton).click({ force: true }); // clica no botão de criar nova conta
  }
  loginInNewAccont(newUserName, newUserPassword) {
    cy.get(this.selectorsListNA().signInWNewACard).should("exist"); //verifica se aparece o card para fazer login com a nova conta
    cy.get(this.selectorsListNA().userNameField).click().type(newUserName); //coloca o username do novo usuário da nova conta
    cy.get(this.selectorsListNA().newUserPasswordfield).click().type(newUserPassword); // coloca a senha da nova conta
    cy.get(this.selectorsListNA().rememberMeButtonNew).click({ force: true }); //clica no botão para lembrar dados da nova conta
    cy.get(this.selectorsListNA().loginNewAcButton).click({ force: true }); //clica no botão para entrar com a nova conta
    
  }
  accessCreateNewBank() {
    cy.get(this.selectorsListNA().startAccountNewUserCard).should("exist"); // na primeira vez que cria a nova conta aparece um card pedindo para criar uma conta bancária
    cy.get('[data-test="user-onboarding-next"]').click({ force: true }); // "next" botão do card para criar a conta
 }
   //createNewAcoBank(bankname,) {
    //cy.get(this.selectorsListNA().newBankAccountCard).should("exist"); //verifica se estou no card de criar uma nova conta bancária
    //cy.get('.MuiButton-colorPrimary').click({ force: true });
    //cy.get(this.selectorsListNA().bankNameinput).type(bankname);
    //cy.get(this.selectorsListNA().RoutingNameinput).type(userD)     
    //cy.get(this.selectorsListNA().newUserSingUpButton).click({ force: true }); // clica no botão de criar nova conta
    //cyata.bankData.RoutingNumber);
    //cy.get(this.selectorsListNA().bankAccountNumberinput).type(userData.bankData.BankAccount);
    //cy.get(this.selectorsListNA().saveNewBankAccountButton).click();
    //cy.get(this.selectorsListNA().finishedcard).should("exist");
  
  newAccountPagefail(newUserFisrtNameinv, newUserLastNameInv, newUserInv, newUserPasswordInv,){
    cy.visit("http://localhost:3000/signin"); //visita o app RWA
    cy.get(this.selectorsListNA().newAccountButton).click({ force: true }); //clica em criar nova conta
    cy.get(this.selectorsListNA().newUserFirstName).type(newUserFisrtNameinv); //coloca o nome de usuário com numeros ao invés de letras
    cy.get(this.selectorsListNA().newUserLastName).type(newUserLastNameInv); // coloca o sobrenome de usuário para a nova conta
    cy.get(this.selectorsListNA().userNameField).type(newUserInv); // cria um user para a nova conta (campo)
    cy.get(this.selectorsListNA().newUserPasswordfield).type(newUserPasswordInv); //cria uma nova senha
    cy.get(this.selectorsListNA().confirmNewPassword).type(newUserPasswordInv); // recola a nova senha no campo confirmar
    cy.get(this.selectorsListNA().newUserInvalidcredAllert).should("exist"); //avisa que não é possivel criar conta com senha de menos de 4 caracteres
  }
}
export default newAccountPage;
