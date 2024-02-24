import HeaderPage from '../page_objects/HeaderPage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const headerPage = new HeaderPage();

When("Click to 'Sign In' link on header", () => {
  headerPage.clickToSignInLink();
});

When('Select "{}" from Language dropdown', (language) => {
  headerPage.selectLanguage(language);
});

When('Select "{}" from Department dropdown', (department) => {
  headerPage.selectDepartment(department);
});

When('Search with keyword "{}"', (keyword) => {
  headerPage.searchWithValue(keyword);
});

Then('User can see Hello User text', () => {
  headerPage.verifySeeHelloUserText();
});
