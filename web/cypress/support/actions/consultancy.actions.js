
Cypress.Commands.add('fillConsultancyForm', (form) => {
    //cy.get('#name').type ('Fernando Papito') // quando tem o id
    cy.get('input[placeholder="Digite seu nome completo"]').type(form.nome) // quando não tem o id 
    cy.get('input[placeholder="Digite seu email"]').type(form.email)
    cy.get('input[placeholder="(00) 00000-0000"]')
        .type(form.phone)
    // .should('have.value', '(11) 99999-1000') // validação de campo com máscara    

    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultancyType)

    if (form.personType === 'cpf') {

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked') // validação de campo do tipo radio button

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked') // validação de campo do tipo radio button

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.document)
        //  .should('have.value', '123.456.789-12') // validação de campo com máscara

    }

    if (form.personType === 'cnpj') {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .check()
            .should('be.checked') // validação de campo do tipo radio button

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked') // validação de campo do tipo radio button

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
        //  .should('have.value', '123.456.789-12') // validação de campo com máscara
    }


    // cy.get('input[placeholder="000.000.000-00"]')
    //     .type('12345678912')
    //     .should('have.value', '123.456.789-12') // validação de campo com máscara




    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked') // validação de campo do tipo checkbox
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true }) // upload de arquivo

    //textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)


    form.techs.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible') // validação de tecnologia adicionada

    })

    if (form.terms === true) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
            .should('be.checked') // validação de campo do tipo checkbox

    }

})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()

})

Cypress.Commands.add('validadeConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 }) // espera até 10 segundos pelo modal
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    cy.contains('button', 'Fechar')
        .click()

})