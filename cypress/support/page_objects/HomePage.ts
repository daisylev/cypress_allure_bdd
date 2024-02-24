import CommonPage from './CommonPage';
import moment from 'moment';
const commonPage = new CommonPage();

class HomePage {
  elements = {
    sortOption: (value) => cy.get('.a-popover-inner').contains(value),
    sortDropdown: () => cy.get('.a-dropdown-container'),
    paginationBar: () => cy.get('.s-pagination-strip'),
    nextPageButton: () => cy.get('.s-pagination-next'),
    listSearchResults: () => cy.get('[data-component-type="s-search-result"]'),
    listDateResults: () => cy.get('.s-title-instructions-style .a-size-base.a-color-secondary.a-text-normal'),
  };

  selectSortOption = (value) => {
    commonPage.clickElement(this.elements.sortDropdown());
    commonPage.clickElement(this.elements.sortOption(value));
  };

  verifyDisplayNumberOfItemOnPage(volume) {
    this.elements.paginationBar().then(($paginationBar) => {
      if ($paginationBar.is(':visible')) {
        this.elements.listSearchResults().should('have.length', volume);
      } else {
        this.elements.listSearchResults().should('have.length.lt', volume);
      }
    });
  }

  verifySortPublicationDateDescending() {
    const dateList: moment.Moment[] = [];
    this.elements
      .listDateResults()
      .each(($element) => {
        const lastPart = $element.text();
        const momentDate = moment(lastPart, 'll', true);
        if (momentDate.isValid()) {
          dateList.push(momentDate);
        }
      })
      .then(() => {
        const sortedDateList = [...dateList].sort((a, b) => (a.isAfter(b) ? -1 : 1));
        cy.wrap(JSON.stringify(sortedDateList)).should('equal', JSON.stringify(dateList));
      });
  }
}

export default HomePage;
