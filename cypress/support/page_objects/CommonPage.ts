class CommonPage {
  elements = {
    alertHeadingText: () => cy.get('.a-alert-heading'),
  };

  gotoUrl = (url: string) => cy.visit(url);

  clickElement = (element) => element.should('be.visible').click();

  hoverElement = (element) => element.should('be.visible').trigger('mouseover');

  typeValueToTextbox = (element, value: string) => element.should('be.visible').clear().type(value);

  selectOptionFromDropdown = (dropDownElement, option: string) => dropDownElement.select(option, { force: true });

  verifyElementDisplay = (element) => element.should('be.visible');

  verifyAlertHeadingTextDisplay = (alertText: string) =>
    this.elements.alertHeadingText().should('include.text', alertText);

  verifyTextVisible = (text: string) => cy.contains(text).should('be.visible');

  verifyElementNotExist = (element) => element.should('not.exist');
}

export default CommonPage;
