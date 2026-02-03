describe('delete Ticket', () => {
  beforeEach(() => {
    cy.login()
    cy.createTicket('ticketToDelete', 'descriptionToDelete')
  })

  it('supprime le dernier ticket de la liste', () => {
  // clique sur le dernier ticket
  cy.get('[id^="ticket-link-"]').last().click(); 
  
  cy.get('#delete-ticket-button').click();
})


})