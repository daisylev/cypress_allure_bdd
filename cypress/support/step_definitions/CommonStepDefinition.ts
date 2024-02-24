import CommonPage from '../page_objects/CommonPage';
import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const commonPage = new CommonPage();

Given('User navigate to Amazon page', () => {
  commonPage.gotoUrl('/');
});

Then('User can see alert message "{}"', (alertText) => {
  commonPage.verifyAlertHeadingTextDisplay(alertText);
});

Then('User can see message "{}"', (message) => {
  commonPage.verifyTextVisible(message);
});
