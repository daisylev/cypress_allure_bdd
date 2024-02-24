import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class LoginPage {
  elements = {
    emailTextbox: () => cy.get('#ap_email'),
    passwordTextbox: () => cy.get('#ap_password'),
    loginButton: () => cy.get('#signInSubmit'),
    continueButton: () => cy.get('#continue'),
    loginErrorMessage: () => cy.get('#auth-error-message-box'),
  };

  typeValueToEmail = (value) => commonPage.typeValueToTextbox(this.elements.emailTextbox(), value);

  typeValueToPassword = (value) => commonPage.typeValueToTextbox(this.elements.passwordTextbox(), value);

  clickToLoginButton = () => commonPage.clickElement(this.elements.loginButton());

  clickToContinueButton = () => commonPage.clickElement(this.elements.continueButton());

  verifyPasswordTextboxDisplay = () => commonPage.verifyElementDisplay(this.elements.passwordTextbox());
}

export default LoginPage;
