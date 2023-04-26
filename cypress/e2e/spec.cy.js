describe("TypeScript test", function () {
    it('google test', function () {
        cy.visit('https://google.com');
        cy.get('#APjFqb')
            .type('Pilar is cool')
            .type("{enter}");
    });
});
