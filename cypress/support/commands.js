Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:5173/login')
  cy.get('html').click();
  cy.get('#root form.row').click();
  cy.get('#root button.primary').click();
})

Cypress.Commands.add('createTicket', (title, description) => {
    cy.get('#new-ticket-link').click();
    cy.get('#new-ticket-link').click();
    cy.get('#title').click();
    cy.get('#title').type(title);
    cy.get('#description').click();
    cy.get('#description').type(description);
    cy.get('#root button.primary').click();
    cy.get('#root a[href="/"]').click();
})