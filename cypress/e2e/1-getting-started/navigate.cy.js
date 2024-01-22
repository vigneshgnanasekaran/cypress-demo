describe(" navigate app app", () => {
  const articleDetails = {
    description:
      "checking the navigation of undivided page ",
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
