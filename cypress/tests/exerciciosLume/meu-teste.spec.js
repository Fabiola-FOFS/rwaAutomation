import userData from "./fixtures/users/userData.json";
import loginPage from "./pagesRWA/loginPage.js";
import newAccountPage from "./pagesRWA/newAccountPage.js";
import moneyPage from "./pagesRWA/moneyPage.js";
import transations from "./pagesRWA/trasationsPage.js";

const loginPageInst = new loginPage();
const createnewAccount = new newAccountPage();
const moneyPageStep = new moneyPage();
const notifications = new transations();

describe("exercicio 1 RWA", () => {
  const selectorsList = {};

  it("Deve fazer login com usuário valido", () => {
    loginPageInst.accessloginPage();
    loginPageInst.loginWhithUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    );
  });
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
    loginPageInst.accessloginPage();
    loginPageInst.loginFail(
      userData.userFail.username,
      userData.userFail.password
    );
  });
  it("Deve registrar um novo usuário com informações válidas", () => {
    createnewAccount.accesscreateNA();
    createnewAccount.createnewAccountWhith(
      userData.newUser.newUserFisrtName,
      userData.newUser.newUserLastName,
      userData.newUser.newUserName,
      userData.newUser.newUserPassword
    );
    createnewAccount.loginInNewAccont(
      userData.newUser.newUserName,
      userData.newUser.newUserPassword
    );
  });
  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
    createnewAccount.newAccountPagefail(
      userData.newUserInvalid.newUserFisrtNameinv,
      userData.newUserInvalid.newUserLastNameInv,
      userData.newUserInvalid.newUserInv,
      userData.newUserInvalid.newUserPasswordInv
    );
  });
  /* Código referente a criar uma nova conta bancária, só da certo na primeira vez que cria a conta */
 // it("Deve criar uma conta bancária nova no caso de haver criado uma conta de usuário nova", () => {
    //createnewAccount.accessCreateNewBank();
    //createnewAccount.createNewAcoBank();
  //});
    it("Deve enviar dinheiro com sucesso", () => {
      moneyPageStep.accessloginPage();
      moneyPageStep.loginWhithUser(
        userData.userSuccess.username,
        userData.userSuccess.password
      );
      moneyPageStep.sendMoney(
        userData.paymentData.contactnamePay,
        userData.paymentData.amountInput,
        userData.paymentData.description
      );
    }); it("deve se negar a enviar o dinheiro", () => {
        moneyPageStep.accessloginPage();
        moneyPageStep.loginWhithUser(
          userData.newUser.newUserName,
          userData.newUser.newUserPassword
        );
        moneyPageStep.sendmoneyFail(userData.bankData.bankname, userData.bankData.RoutingNumber, userData.bankData.BankAccount,
          userData.paymentData.contactnamePay,
          userData.paymentData.amountInput,
          userData.paymentData.description
        );
      });
      describe("Visualizar histórico de transações com sucesso", () => {
        it("Deve exibir o histórico de transações de um usuário corretamente", () => {
            loginPageInst.accessloginPage();
            loginPageInst.loginWhithUser(
            userData.userSuccess.username,
            userData.userSuccess.password);
            notifications.accessNotifications();  
          });
      });
      describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
        it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
          loginPageInst.accessloginPage();
          loginPageInst.loginWhithUser(
            userData.newUser.newUserName,
            userData.newUser.newUserPassword);
            notifications.accessNotifications();
            notifications.accessNotificationsFail();
      });
      });
    });
  
