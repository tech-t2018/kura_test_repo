describe('Testing input', () => {
    it('check input number', () => {
        cy.visit('http://localhost:3000/example-2'),

        cy.get('span')
        .invoke('text')
        .should('equal', '15')
        
    });

});