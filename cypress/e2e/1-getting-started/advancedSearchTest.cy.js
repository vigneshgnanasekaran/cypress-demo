// Importing the AdvanceSearch from PageObjects
import AdvanceSearch from "../pageObjects/ advancedSearch";   
 

describe("Advance Search Test", () => {
  let adv;

  // Adding Description to the report
  const title = {
    description:
      "Verifying URL and dropdown for each topic, clicking the first checkbox if present, confirming URL change, and validating the first page result tag names.",
  };

  beforeEach(() => {
    // Initialize the AdvanceSearch class before each test case
    adv = new AdvanceSearch();
  });

  context(`Description: ${title.description}`, () => {
    it("should validate the advance search", () => {
      
      // Calling the Search method from the AdvanceSearch class
      adv.Search();
    });
  });
});

