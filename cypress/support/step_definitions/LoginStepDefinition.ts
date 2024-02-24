import LoginPage from '../page_objects/LoginPage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const loginPage = new LoginPage();

When('Type "{}" to \'Email or mobile phone number\' textbox', (email) => {
  loginPage.typeValueToEmail(email);
});

When('Type "{}" to Password textbox', (password) => {
  loginPage.typeValueToPassword(password);
});

When('Click to Login button', () => {
  loginPage.clickToLoginButton();
});

When('Click to Continue button', () => {
  loginPage.clickToContinueButton();
});

Then('User can see Password textbox appears', () => {
  loginPage.verifyPasswordTextboxDisplay();
});
