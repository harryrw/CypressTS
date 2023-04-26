describe("TypeScript test", () => {
  it('google test', function() {
    cy.visit('https://google.com')
    cy.get('#APjFqb')
      .type('Pilar is cool')
      .type("{enter}")
  })
})