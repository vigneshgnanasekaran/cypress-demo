// Importing paths from commonUtils module
import { paths } from "../utils/commonUtils";
// Defining the AdvanceSearch class
class AdvanceSearch {
  // Elements object containing Cypress XPath and css expressions for various page elements
  Elements = {
    advancedSearchButton: () =>
      cy.xpath("//a[@href='/resources/search'][text()='Advanced search']"),
    firstCheckBox: () =>
      cy.xpath("(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]"),
    checkBoxUpdateButton: () => cy.xpath("//button[text()='Update Results']"),
    checkBoxClearAllButton: () => cy.xpath("(//span[text()='Clear All'])[2]"),
    allCheckBoxClearAllButton: () =>
      cy.xpath("(//span[text()='Clear All'])[1]"),
    dropDown: (contentType) =>
      cy.xpath(
        `//button[@id='basic-button' and contains(text(),'${contentType}')]`
      ),
    result: () =>
      cy.get("[class='latestresourcecard_mainContainer__DdL4N']>div>div"),
    popupCloseButton: () => cy.get(".modal_closeButton__zJ_Oa>img"),
    previewButtons: () =>
      cy.get(
        "[class='pagination_container__1Tdcb MuiBox-root css-0'] >div>div"
      ),
  };
  // Mapping of content types to their corresponding topic numbers
  contentTypes = {
    "Public Benefits": 1,
    "Education and IEPs": 8,
    "Family Life": 20,
    "Insurance": 25,
    "Self-Care for Parents": 28,
    "Mental Health": 29,
    "New Diagnosis": 32,
    "Therapies": 33,
    "Future": 39,
    "Medical": 41,
  };
  // Method for performing the search
  Search() {
    // Visit the Undivided Resource before starting the search
    cy.visit(paths.RESOURCE_URL);
    // Opening the signup modal
    cy.window()
      .its("openSignupModal")
      .then((openSignupModal) => {
        openSignupModal();
      });
    // Closing the signup modal
    this.Elements.popupCloseButton().click();

    // Clicking on the advanced search button
    this.Elements.advancedSearchButton().click();

    // Asserting that the URL contains the advanced search URL
    cy.url().should("include", paths.ADVANCED_SEARCH_URL);

    // Iterating through content types and performing searches
    for (const [contentType, topic] of Object.entries(this.contentTypes)) {
      this.Elements.dropDown(contentType).then(($btn) => {
        $btn.click();
        // Checking if the button has the active class
        if ($btn.hasClass("filterButton_activeBtn__eDe_l")) {
          cy.wait(2000);
          // Checking if the URL contains the respective topic
          cy.location("search").should(`contain`, `topics=${topic}`);
          // Call the results method
          this.results(contentType);
        }

        // If not active, clicking the first checkbox and updating results
        else {
          cy.wait(500);
          this.Elements.firstCheckBox().click();
          this.Elements.checkBoxUpdateButton().click();
          // Checking if the URL contains the respective topic
          cy.location("search").should(`contain`, `topics=${topic}`);
          cy.wait(2000);
          // Call the results method
          this.results(contentType);
        }
      });
      // Clearing all checkboxes
      this.Elements.allCheckBoxClearAllButton().click();
      cy.location("pathname").should("contain", "/resources/search");
    }
  }

  // Method for processing and asserting results
  results(contentType) {
    this.Elements.result()
      .parent()
      .then((child) => {
        const maxChild = child.length;

        // Iterating through results and asserting content type
        for (let i = 0; i < maxChild; i++) {
          this.Elements.result()
            .parent()
            .eq(i)
            .invoke("text")
            .then((text) => {
              cy.log(text);
              expect(text).to.contain(contentType);
            });
        }
      });
  }
}
// Exporting the AdvanceSearch class
export default AdvanceSearch;
