
describe('Simulando Mouseover', () => {
    it('Deve exibir o menu ao passar o mouse em cima do link do instagram', () => {
        cy.login()

        cy.contains('Isso é Mouseover!').should('not.exist') // verifica que o texto não está visível
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist') // verifica que o texto está visível

    })

});



