describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://172.31.30.40:3000/example-1')

        cy.get('h1')
            .invoke('text')
            .should("equal", "My Awesome Web Application")
    });

});
