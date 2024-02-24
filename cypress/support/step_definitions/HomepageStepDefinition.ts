import HomePage from '../page_objects/HomePage';
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();

When('Select Sort by "{}"', (value) => {
  homePage.selectSortOption(value);
});

Then('Verify the result displays "{}" items per page if it has pagination', (volume) => {
  homePage.verifyDisplayNumberOfItemOnPage(volume);
});

Then('Verify the result is sorted by Publication Date in descending order', () => {
  homePage.verifySortPublicationDateDescending();
});
