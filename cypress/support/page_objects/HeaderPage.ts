import CommonPage from './CommonPage';
const commonPage = new CommonPage();

class HeaderPage {
  elements = {
    searchTextbox: () => cy.get('#twotabsearchtextbox'),
    languageOption: (option: string) => cy.get(`#icp-nav-flyout .nav-line-2 div:contains(${option})`),
    helloUserLabel: () => cy.get('[id="nav-link-accountList-nav-line-1"]').contains('Hello'),
    departmentDropdown: () => cy.get('#searchDropdownBox'),
    accountLink: () => cy.get('#nav-link-accountList'),
    languageLink: () => cy.get('#icp-nav-flyout'),
    searchButton: () => cy.get('#nav-search-submit-button'),
    saveChangeButton: () => cy.get('#icp-save-button'),
  };

  clickToSignInLink = () => commonPage.clickElement(this.elements.accountLink());

  searchWithValue = (value) => {
    commonPage.typeValueToTextbox(this.elements.searchTextbox(), value);
    commonPage.clickElement(this.elements.searchButton());
  };

  selectDepartment = (department) =>
    commonPage.selectOptionFromDropdown(this.elements.departmentDropdown(), department);

  selectLanguage = (language) => {
    commonPage.hoverElement(this.elements.languageLink());
    commonPage.clickElement(this.elements.languageOption(language));
    commonPage.clickElement(this.elements.saveChangeButton());
    commonPage.verifyElementNotExist(this.elements.saveChangeButton());
  };

  verifySeeHelloUserText = () => {
    commonPage.verifyElementDisplay(this.elements.helloUserLabel());
  };
}

export default HeaderPage;
