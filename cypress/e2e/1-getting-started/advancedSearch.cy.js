import AdvanceSearch from "../../pageObjects/advancedSearch";
describe("advance search ", () => {

    let advs
    const articleDetails = {
      description:
        "Verifying article text,tag, default image, and content existence for a single article ID or the latest 10 articles",
    };
  
    beforeEach(() => {
        advs = new AdvanceSearch();
    });
    context(`Description : ${articleDetails.description}`, () => {
    it("advance search", () => {
     advs.Search()

    });
  });
  });
  