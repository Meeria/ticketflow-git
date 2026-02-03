describe('Création de Ticket', () => {
  beforeEach(() => {
    cy.login()
  })

  it('createTicket', () => {
    cy.get('#new-ticket-link').click();
    
    cy.get('#new-ticket-link').click();
    cy.get('#title').click();
    cy.get('#title').type('newticket');
    cy.get('#description').click();
    cy.get('#description').type('newdescr');
    cy.get('#root button.primary').click();
    cy.get('#root a[href="/"]').click();
    
  })
})