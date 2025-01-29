class moneyPage {
  stepsMoney() {
    return {
      usernameField: "#username", // usuário
      passwordField: "#password", // senha
      rememberMeButton: ".MuiFormControlLabel-root", // lembrar conta
      signInButton: '[data-test="signin-submit"]', // botão de entrar
      sendmoneyButton: '[data-test="nav-top-new-transaction"]', // botão de enviar dinheiro
      contactPayInsert: '[data-test="user-list-search-input"]', // inserir nome do contato
      payselectcontact:
        '[data-test="user-list-item-GjWovtg2hr"] > .MuiListItemText-root > .MuiTypography-body1', // contato selecionado
      amountField: "#amount", // valor da transação
      amountDescription: "#transaction-create-description-input", // descrição
      paybutton: '[data-test="transaction-create-submit-payment"]', // botão de pagamento
      trasactionSubmitAlert: ".MuiAlert-message", // alerta de sucesso
      startAccountNewUserCard: '[data-test="user-onboarding-dialog-title"]', // card deve aparecer na 1 vez que cria uma nova conta pedindo para criar uma conta bancária
      startNextButton: '[data-test="user-onboarding-next"]', // botão do card para criar a conta bancária
      newBankAccountCard: '.MuiDialog-container', //card com o formulario para criar uma nova conta bancária
      bankNameinput: "#bankaccount-bankName-input", // campo para colocar o nome do banco
      RoutingNameinput: "#bankaccount-routingNumber-input", //campo para colocar o numero ROUTING do banco
      bankAccountNumberinput: "#bankaccount-accountNumber-input", //campo para colocar o numero da conta bancaria
      saveNewBankAccountButton: '[data-test="bankaccount-submit"]', // botão para salvar a nova conta bancária
      finishedcard: '[data-test="user-onboarding-dialog-title"]', //card que aparece quando fi
    };
  }

  accessloginPage() {
    cy.visit("http://localhost:3000/");
  }

  loginWhithUser(username, password) {
    cy.get(this.stepsMoney().usernameField).click().type(username);
    cy.get(this.stepsMoney().passwordField).click().type(password);
    cy.get(this.stepsMoney().rememberMeButton).click();
    cy.get(this.stepsMoney().signInButton).click();
  }

  sendMoney(contactname, amount, description) {
    cy.get(this.stepsMoney().sendmoneyButton).click();
    cy.contains("Payment").should("be.visible");
    cy.get(this.stepsMoney().contactPayInsert).click({ force: true }).type(contactname);
    cy.get(this.stepsMoney().payselectcontact).click({ force: true });
    cy.get(this.stepsMoney().amountField).click().type(amount);
    cy.get(this.stepsMoney().amountDescription).click().type(description);
    cy.get(this.stepsMoney().paybutton).click();
    cy.get(this.stepsMoney().trasactionSubmitAlert).should("be.visible");
  }

  sendmoneyFail(bankname, userD, bankAc, contactname, amountfail, description) {
    //bloco de codigo para quando aparecer o card de criar conta bancária, as vezes aparece as vezes não

    // cy.get(this.stepsMoney().newBankAccountCard).should("exist"); //verifica se estou no card de criar uma nova conta bancária
    //cy.get(this.stepsMoney().startNextButton).click({force: true});
    //cy.get(this.stepsMoney().bankNameinput).type(bankname);
    //cy.get(this.stepsMoney().RoutingNameinput).type(userD); 
    //cy.get(this.stepsMoney().bankAccountNumberinput).type(bankAc);    
    //cy.get(this.stepsMoney().saveNewBankAccountButton).click();
    //cy.get(this.stepsMoney().finishedcard).should("exist")

    cy.get(this.stepsMoney().sendmoneyButton).click();
    cy.contains("Payment").should("be.visible");
    cy.get(this.stepsMoney().contactPayInsert).click({ force: true }).type(contactname);
    cy.get(this.stepsMoney().payselectcontact).click({ force: true });
    cy.get(this.stepsMoney().amountField).click().type(amountfail);
    cy.get(this.stepsMoney().amountDescription).click().type(description);
    cy.get('[data-test="sidenav-user-balance"]');  //mostra o saldo 
    //cy.get(this.stepsMoney().paybutton).click();
    //cy.get(this.stepsMoney().trasactionSubmitAlert).should("be.visible");
  }
}

export default moneyPage;
