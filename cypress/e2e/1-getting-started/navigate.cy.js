describe("example navigate app app", () => {
  const articleDetails = {
    description:
      "Verifying article text,tag, default image, and content existence for a single article ID or the latest 10 articles",
  };

  beforeEach(() => {
    cy.visit("https://qa.teamspecialx.com/resources/decoders");
  });
  context(`Description : ${articleDetails.description}`, () => {
  it("checking the opening of the page", () => {
    cy.url().should("eq", "https://qa.teamspecialx.com/resources/decoders");
  });
});
});
