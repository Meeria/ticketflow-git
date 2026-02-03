describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('html').click();
    cy.get('#root form.row').click();
    cy.get('#root button.primary').click();
    //cy.get('#root nav.row button').click();
  })
})