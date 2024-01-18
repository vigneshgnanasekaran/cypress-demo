describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("https://qa.teamspecialx.com/");
  });

  it("checking the opening of the page", () => {
    cy.url().should("eq", "https://qa.teamspecialx.com/");
    cy.get('a').each((link) => {
      
      const href = link.attr('href');

      
      cy.request(href).then((response) => {
        expect(response.status).to.eq(200); // Assuming a successful response code
      });
    });
  });
});
