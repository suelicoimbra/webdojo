describe('Studio', () => {
  it('Exemplo do Cypress Studio', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1')
    .should('be.visible')
    .should('have.text', 'Kitchen Sink');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').type('katana123');
    //cy.get('.bg-\\[\\#8257E5\\]').click(); // botão de login -- da forma que montou nao é recomendado usar classe css para selecionar elemento
    cy.contains('button', 'Entrar').click(); // forma mais recomendada de selecionar o botão de login
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    /* ==== End Cypress Studio ==== */
  });
})