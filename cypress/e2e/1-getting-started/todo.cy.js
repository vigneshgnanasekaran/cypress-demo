describe(" to-do app", () => {
  beforeEach(() => {
    cy.visit("https://qa.teamspecialx.com/");
  });

  it("checking the opening of the page", () => {
    cy.url().should("eq", "https://qa.teamspecialx.com/");
    
  });
});
