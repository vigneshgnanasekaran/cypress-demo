 



describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit("https://www.undivided.io")
  })

  it('checking the opening of the page', () => {
    cy.url().should('eq','https://www.undivided.io/pricing/')
  })
 
})
